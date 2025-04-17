'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Row, 
  Col, 
  Card, 
  Button, 
  Modal,
} from 'react-bootstrap';
import { getUser } from '@/lib/auth/getUser';
import appAxios from '@/config/axios';
import AppImage from '../common/AppImage';

export default function CouponMatchGame() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [startGame, setStartGame] = useState(false);
  const [shuffledCoupons, setShuffledCoupons] = useState<CouponType[]>([]);
  const [gameState, setGameState] = useState<GameState>({
    moves: 0,
    points: 0,
    matchedPairs: 0,
    isLocked: false,
    flippedCards: [],
    matchedCards: [],
    startTime: 0,
    timer: '00:00',
    canPlay: true,
    cooldownMessage: ''
  });
  const [showVictoryModal, setShowVictoryModal] = useState(false);
  const [showMovesLimitModal, setShowMovesLimitModal] = useState(false);
  const [lastGameStats, setLastGameStats] = useState({
    moves: '-',
    points: '-',
    time: '-'
  });
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const countdownRef = useRef<NodeJS.Timeout | null>(null);
  const maxMoves = 12;

  const couponTypes: CouponType[] = [
    { name: 'UNQ', image: '/assets/img/parachains/unique1.png', color: '#f472b6' },
    { name: 'Unique', image: '/assets/img/parachains/unique22.png', color: '#8b5cf6' },
    { name: 'Moonbeam', image: '/assets/img/parachains/moonbeam1.jpg', color: '#f59e0b' },
    { name: 'You-Moonbeam', image: '/assets/img/parachains/moonbeam2.png', color: '#10b981' },
    { name: 'Acala', image: '/assets/img/parachains/acala1.png', color: '#6366f1' },
    { name: 'You-Acala', image: '/assets/img/parachains/acala3.png', color: '#ef4444' },
    { name: 'Polkadot', image: '/assets/img/parachains/polkadot1.png', color: '#14b8a6' },
    { name: 'You-Polkadot', image: '/assets/img/parachains/polkadot2.png', color: '#f97316' }
  ];

  useEffect(() => {
    const fetchUser = async () => {
      setUser(await getUser());
    };
    fetchUser();
    checkCooldown();
    loadPreviousGameStats();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (countdownRef.current) clearInterval(countdownRef.current);
    };
  }, []);

  const initializeGame = () => {
    const newGameState = {
      moves: 0,
      points: 0,
      matchedPairs: 0,
      isLocked: false,
      flippedCards: [],
      matchedCards: [],
      startTime: Date.now(),
      timer: '00:00',
      canPlay: gameState.canPlay,
      cooldownMessage: gameState.cooldownMessage
    };
    const shuffled = [...couponTypes, ...couponTypes]
        .sort(() => Math.random() - 0.5);
    setGameState(newGameState);
    startTimer(newGameState.startTime);
    setShuffledCoupons(shuffled);
    setStartGame(true);
  };

  const createConfetti = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();
    for (let i = 0; i < 5; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = `${rect.left + Math.random() * rect.width}px`;
      confetti.style.top = `${rect.top}px`;
      document.body.appendChild(confetti);
      
      confetti.addEventListener('animationend', () => confetti.remove());
    }
  };

  const startTimer = (startTime: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    timerRef.current = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const minutes = Math.floor(elapsed / 60).toString().padStart(2, '0');
      const seconds = (elapsed % 60).toString().padStart(2, '0');
      setGameState(prev => ({ ...prev, timer: `${minutes}:${seconds}` }));
    }, 1000);
  };

  const flipCard = (index: number, name: string) => {
    if (gameState.isLocked || 
        gameState.flippedCards.includes(index) || 
        gameState.matchedCards.includes(index)) { // Check if card is already matched
      return;
    }
  
    // Allow flipping if we have 0 or 1 cards flipped
    if (gameState.flippedCards.length < 2) {
      const newFlippedCards = [...gameState.flippedCards, index];
      setGameState(prev => ({ ...prev, flippedCards: newFlippedCards }));
  
      if (newFlippedCards.length === 2) {
        const newMoves = gameState.moves + 1;
        setGameState(prev => ({ ...prev, moves: newMoves }));
        
        setTimeout(() => checkMatch(newFlippedCards), 500);
        
        if (newMoves >= maxMoves) {
          setTimeout(() => movesLimitReached(), 1000);
        }
      }
    }
  };

  const checkMatch = (flippedCards: number[]) => {
    setGameState(prev => ({ ...prev, isLocked: true }));
    const [index1, index2] = flippedCards;
    const card1 = document.querySelector(`[data-index="${index1}"]`) as HTMLElement;
    const card2 = document.querySelector(`[data-index="${index2}"]`) as HTMLElement;
    
    if (card1?.dataset.name === card2?.dataset.name) {
      // Match found - add to matched cards
      setGameState(prev => ({
        ...prev,
        matchedPairs: prev.matchedPairs + 1,
        points: prev.points + 100,
        matchedCards: [...prev.matchedCards, index1, index2], // Add both cards to matched
        isLocked: false,
        flippedCards: []
      }));
  
      if (card1) createConfetti(card1);
      if (card2) createConfetti(card2);
  
      if (gameState.matchedPairs + 1 === couponTypes.length) {
        setTimeout(() => gameComplete(), 500);
      }
    } else {
      // No match - flip back after delay
      setTimeout(() => {
        card1?.classList.remove('flipped');
        card2?.classList.remove('flipped');
        setGameState(prev => ({
          ...prev,
          flippedCards: [],
          isLocked: false
        }));
      }, 1000);
    }
  };

  const movesLimitReached = async () => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    try {
      await saveScore();
      await updateProgress();
    } catch (error) {
      console.error("Error saving game data:", error);
    }

    setShowMovesLimitModal(true);
    startCountdown('limitCountdownTimer', () => router.push('/'));
  };

  const gameComplete = async () => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    try {
      await saveScore();
      await updateProgress();
    } catch (error) {
      console.error("Error saving game data:", error);
    }

    setShowVictoryModal(true);
    startCountdown('countdownTimer', () => router.push('/'));
  };

  const startCountdown = (elementId: string, callback: () => void) => {
    let countdown = 3;
    const countdownElement = document.getElementById(elementId);
    if (countdownElement) countdownElement.textContent = countdown.toString();
    
    countdownRef.current = setInterval(() => {
      countdown--;
      if (countdownElement) countdownElement.textContent = countdown.toString();
      
      if (countdown <= 0) {
        if (countdownRef.current) clearInterval(countdownRef.current);
        callback();
      }
    }, 1000);
  };

  const saveScore = async () => {
    try {
      const gameData = {
        game: 'coupon-match',
        score: gameState.points,
        moves: gameState.moves,
        time: gameState.timer
      };
      
      await appAxios.post('/game/saveGameScore', gameData);
      await loadPreviousGameStats();
    } catch (error) {
      console.error('Error saving score:', error);
    }
  };

  const updateProgress = async () => {
    try {
      await appAxios.post('/game/updateGameProgress', {
        cooldownHours: 24
      });
    } catch (error) {
      console.error('Error updating game progress:', error);
    }
  };

  const checkCooldown = async () => {
    try {
      const response = await appAxios.get('/game/checkGameProgress');
      
      if (response.data.canPlay) {
        setGameState(prev => ({
          ...prev,
          canPlay: true,
          cooldownMessage: ''
        }));
        return true;
      }
      
      const nextAvailablePlay = new Date(response.data.nextAvailablePlay);
      const now = new Date();
      const timeDiff = nextAvailablePlay.getTime() - now.getTime();
      
      const hoursRemaining = Math.floor(timeDiff / (60 * 60 * 1000));
      const minutesRemaining = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
      
      const cooldownMessage = hoursRemaining > 0 ? 
        `Available in ${hoursRemaining}h ${minutesRemaining}m` : 
        `Available in ${minutesRemaining} minutes`;
      
      setGameState(prev => ({
        ...prev,
        canPlay: false,
        cooldownMessage
      }));
      
      return false;
    } catch (error) {
      console.error('Error checking game progress:', error);
      setGameState(prev => ({
        ...prev,
        canPlay: true,
        cooldownMessage: ''
      }));
      return true;
    }
  };

  const loadPreviousGameStats = async () => {
    try {
      const response = await appAxios.get('/game/checkGameProgress');
      
      if (response.data.lastGameStats) {
        setLastGameStats({
          moves: response.data.lastGameStats.moves,
          points: response.data.lastGameStats.score,
          time: response.data.lastGameStats.time
        });
      }
    } catch (error) {
      console.error('Error loading previous game stats:', error);
    }
  };

  const renderGameBoard = () => {
    return (
      <div className="game-board">
        {shuffledCoupons.map((coupon, index) => {
          const isFlipped = gameState.flippedCards.includes(index);
          const isMatched = gameState.matchedCards.includes(index);
          return (
            <div 
              key={index}
              className={`card ${isFlipped || isMatched ? 'flipped' : ''}`}
              data-index={index}
              data-name={coupon.name}
              onClick={() => {
                if (!isMatched && !isFlipped && gameState.flippedCards.length < 2) {
                  flipCard(index, coupon.name);
                }
              }}
            >
              <div className="card-face card-front">
                <div className="card-content">
                  <AppImage src={coupon.image} alt={coupon.name} width={80} height={80} />
                  <div>{coupon.name}</div>
                </div>
              </div>
              <div className="card-face card-back">
                <div className="card-content">
                  <AppImage src="/assets/img/koopon-logo.png" width={200} height={200} alt="KooponCraft" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="game-container">
        {user && user.points >= 100 ? (
          <>
            <Row className="g-4 mb-4">
              <Col xs={12} md={6} className='mx-auto'>
                <Card className="border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-controller text-primary me-2" style={{ fontSize: '1.5rem' }}></i>
                      <h5 className="mb-0">Current Game</h5>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="text-center">
                        <p className="text-muted mb-1">Moves</p>
                        <h3 className="mb-0">{gameState.moves}</h3>
                      </div>
                      <div className="text-center">
                        <p className="text-muted mb-1">Points</p>
                        <h3 className="mb-0">{gameState.points}</h3>
                      </div>
                      <div className="text-center">
                        <p className="text-muted mb-1">Time</p>
                        <h3 className="mb-0">{gameState.timer}</h3>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            
            <div className="game-controls">
              <Button 
                variant="primary" 
                className="rounded-pill" 
                onClick={initializeGame}
                disabled={!gameState.canPlay}
              >
                {gameState.canPlay ? 'Start New Game' : gameState.cooldownMessage}
              </Button>
            </div>

            {startGame && renderGameBoard()}
          </>
        ) : (
          <div className='text-center'>
            <p className='fs-3'>Coupon Match is unavailable</p>
            <p style={{fontSize: "1.2rem"}}>
              You need at least 100 points to play the Coupon Match game. Earn points through daily logins, purchases, and trades!
            </p>
          </div>
        )}
      </div>

      {/* Victory Modal */}
      <Modal show={showVictoryModal} centered onHide={() => setShowVictoryModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Congratulations! 🎉</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You've completed the Coupon Match game!</p>
          <p>Moves: <span>{gameState.moves}</span></p>
          <p>Time: <span>{gameState.timer}</span></p>
          <p>Points Earned: <span>{gameState.points}</span></p>
          <p className="mt-3">Come back tomorrow to play again!</p>
          <p>Returning to home in <span id="countdownTimer">3</span> seconds...</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => router.push('/')}>Return Home</Button>
        </Modal.Footer>
      </Modal>

      {/* Moves Limit Modal */}
      <Modal show={showMovesLimitModal} centered onHide={() => setShowMovesLimitModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Game Over! ⏱️</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>You've reached the maximum number of moves (12)!</p>
          <p>Moves: <span>{gameState.moves}</span></p>
          <p>Time: <span>{gameState.timer}</span></p>
          <p>Points Earned: <span>{gameState.points}</span></p>
          <p className="mt-3">Come back tomorrow to play again!</p>
          <p>Returning to home in <span id="limitCountdownTimer">3</span> seconds...</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => router.push('/')}>Return Home</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}