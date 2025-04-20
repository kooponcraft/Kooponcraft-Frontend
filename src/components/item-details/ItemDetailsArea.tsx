'use client';

declare global {
  interface Window {
    ethereum?: any;
    injectedWeb3?: Record<string, any>;
  }
}

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { 
  Row, 
  Col, 
  Card, 
  Button, 
  Modal, 
  Toast, 
  ToastContainer,
  Badge,
  Spinner,
  Dropdown
} from 'react-bootstrap';
import { getItemDetails } from '@/lib/getItemDetails';
import Divider from '../common/Divider';
import AppImage from '../common/AppImage';
import { purchaseItem } from '@/lib/purchaseItem';
import { getUser } from '@/lib/auth/getUser';
import { connectWallet } from '@/lib/connectWallet';
import { purchaseCoupon } from '@/lib/purchaseCoupon';

export default function ItemDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { slug } = params;
  const type = slug?.[0];
  const collectionId = slug?.[1];
  const tokenId = slug?.[2];

  const [token, setToken] = useState<Token | null>(null);
  const [moreCoupons, setMoreCoupons] = useState<Token[]>([]);
  const [myCoupons, setMyCoupons] = useState<Coupon[]>([]);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState<'success' | 'danger'>('success');
  const [isPurchasing, setIsPurchasing] = useState(false);
  const [accountAddress, setAccountAddress] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getItemDetails(
          type as "item" | "coupon", 
          collectionId as string, 
          tokenId as string
        );
        setToken(data?.token);
        setMoreCoupons(data?.moreCoupons || []);
        setMyCoupons(data?.myCoupons || []);
        const user = await getUser()
        setAccountAddress(user && user.accountAddress)
      } catch (error) {
        console.error('Error fetching item details:', error);
        setToastVariant('danger');
        setToastMessage('Failed to load item details');
        setShowToast(true);
      }
    };

    fetchData();
  }, [type, collectionId, tokenId]);

  const handlePurchase = async () => {
    if (!token) return;

    setIsPurchasing(true);
    setShowToast(true);
    setToastMessage('Processing your purchase...');
    setToastVariant('success');

    try {
      const data = await (
        type == "item" ? purchaseItem({
          tokenId: token.tokenId,
          collectionId: token.collectionId,
          applyTokenId: selectedCoupon?.split('-')[0],
          applyCollectionId: selectedCoupon?.split('-')[1],
          tokenType: token.tokenType,
        }) : purchaseCoupon({
          tokenId: token.tokenId,
          collectionId: token.collectionId,
        })
      )

      if (data.success) {
        setToastMessage('Purchase successful!');
        router.push(type == "item" ? '/my-tokens' : '/dashboard')
      }
    } catch (error: any) {
      setToastVariant('danger');
      setToastMessage(error.response?.data?.error || error.message || 'Purchase failed');
    } finally {
      setIsPurchasing(false);
    }
  };

  const handleConnectWallet = async (type: any) => {
    const wallet = await connectWallet(type)
    if(!wallet.connected){
      setToastVariant('danger');
      setToastMessage(wallet.error)
      setShowToast(true);
      return;
    }
    setAccountAddress(wallet.address)
    setShowWalletModal(false)
    setToastVariant('success');
    setToastMessage(wallet.walletType + ' connected successfully!');
    setShowToast(true);
    handlePurchase()
  }

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setToastMessage('Link copied to clipboard!');
    setToastVariant('success');
    setShowToast(true);
    setShowLinkModal(false);
  };

  if (!token) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" variant="primary" />
        {/* <p className="mt-2">Loading...</p> */}
      </div>
    );
  }

  return (
    <>
      {/* Share Modal */}
      <ShareModal 
        show={showShareModal} 
        onHide={() => setShowShareModal(false)} 
      />

      {/* Link Modal */}
      <LinkModal 
        show={showLinkModal} 
        onHide={() => setShowLinkModal(false)} 
        onCopy={copyLink}
      />

      {/* Wallet Modal */}
      <WalletModal
        show={showWalletModal}
        onHide={() => setShowWalletModal(false)}
        handleConnectWallet={handleConnectWallet}
        handlePurchase={handlePurchase}
        token={token}
        isPurchasing={isPurchasing}
      />

      {/* Item Details */}
      <div className="item-details-wrap">
        <div className="container">
          <Row className="g-4 g-lg-5 justify-content-center">
            <Col xs={12} md={12} lg={6}>
              <div className="item-big-thumb position-relative" style={{ height: '400px' }}>
                <AppImage
                  src={token.tokenImageUrl}
                  alt={token.tokenName}
                  fill
                  className="rounded"
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </Col>

            <Col xs={12} md={9} lg={6}>
              <div className="item-details-content mt-5 mt-lg-0">
                <Dropdown className="item-details-dd">
                  <Dropdown.Toggle variant="link" className='p-1' id="dropdown-menu">
                    <i className="bi bi-three-dots-vertical"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu align="end">
                    <Dropdown.Item onClick={() => setShowShareModal(true)}>
                      <i className="me-1 bi bi-share"></i> Share
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setShowLinkModal(true)}>
                      <i className="me-1 bi bi-box-arrow-up-right"></i> Copy Link
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <h2 className="my-3">
                  {token.tokenName} <Badge bg="primary">#{token.tokenId}</Badge>
                </h2>

                <div className="d-flex align-items-center mb-4">
                  <div className="position-relative me-3">
                    <AppImage
                      src={token.profileImageUrl || `https://api.dicebear.com/6.x/identicon/svg?seed=${encodeURIComponent(token.ownerName)}`}
                      alt={token.ownerName}
                      width={60}
                      height={60}
                      className="rounded-circle shadow"
                    />
                    <Badge bg="primary" className="position-absolute bottom-0 end-0 p-1 rounded-circle">
                      <i className="bi bi-check"></i>
                    </Badge>
                  </div>
                  <div>
                    <span className="d-block small">Owner</span>
                    <strong className="text-primary">@{token.ownerName}</strong>
                  </div>
                </div>

                 <div className="border-top w-75 mt-4 mb-4"></div>

                <Row className="align-items-end mb-4">
                  <Col xs={6} sm={4} lg={5}>
                    <p className="mb-2">Price</p>
                    <Card className="border-primary text-primary text-center p-2">
                      <strong>{token.priceOfCoupon.toFixed(2)} UNQ</strong>
                    </Card>
                  </Col>
                  
                  {!token.isPurchased && (
                    <Col xs={6} sm={4} lg={5}>
                      <Button
                        variant="primary"
                        className="rounded-pill w-100 p-2"
                        onClick={() => accountAddress ? handlePurchase() : setShowWalletModal(true)}
                        disabled={isPurchasing}
                      >
                        {isPurchasing ? (
                          <>
                            <Spinner as="span" size="sm" animation="border" role="status" />
                            <span className="ms-2">Processing...</span>
                          </>
                        ) : 'Buy'}
                      </Button>
                    </Col>
                  )}
                  <small className="mt-2">VAT is included</small>
                </Row>

                {token.tokenDescription && (
                  <div className="mb-4">
                    <h5>Description</h5>
                    <p className="mb-0">{token.tokenDescription}</p>
                  </div>
                )}

                 <div className="border-top w-75 mt-4 mb-4"></div>

                {myCoupons.length > 0 && (
                  <div className="mb-4">
                    <h5 className="mb-3">Apply a coupon</h5>
                    <Row xs={1} md={2} className="g-3">
                      {myCoupons.map((coupon) => (
                        <Col key={`${coupon.tokenId}-${coupon.collectionId}`}>
                          <Card className={`h-100 ${selectedCoupon === `${coupon.tokenId}-${coupon.collectionId}` ? 'border-primary border-2' : ''}`}>
                            <Card.Body className="p-3">
                              <div className="form-check">
                                <input
                                  type="radio"
                                  id={`coupon-${coupon.tokenId}`}
                                  name="applyToken"
                                  className="form-check-input"
                                  onChange={() => setSelectedCoupon(`${coupon.tokenId}-${coupon.collectionId}`)}
                                  checked={selectedCoupon === `${coupon.tokenId}-${coupon.collectionId}`}
                                />
                                <label htmlFor={`coupon-${coupon.tokenId}`} className="w-100">
                                  <Row className="align-items-center">
                                    <Col xs={3}>
                                      <div className="position-relative" style={{ height: '80px' }}>
                                        <AppImage
                                          src={coupon.tokenImageUrl}
                                          alt={coupon.tokenName}
                                          fill
                                          className="rounded"
                                          style={{ objectFit: 'cover' }}
                                        />
                                        <Badge bg="danger" className="position-absolute top-0 start-0">
                                          #{coupon.tokenId}
                                        </Badge>
                                      </div>
                                    </Col>
                                    <Col xs={9}>
                                      <h6 className="mb-1">{coupon.tokenName}</h6>
                                      <small className="text-muted d-block">@{coupon.ownerName}</small>
                                      <div className="mt-2">
                                        <Badge bg="light" text="dark" className="fs-6">
                                          {coupon.priceOfCoupon} UNQ
                                        </Badge>
                                      </div>
                                    </Col>
                                  </Row>
                                </label>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <Divider />

      {/* Related Items */}
      <div className="container mb-5">
        <h2 className="mb-4">Other Coupons From This Collection</h2>
        
        {moreCoupons.length > 0 ? (
          <Row xs={1} md={2} lg={3} className="g-4">
            {moreCoupons.map((coupon) => (
              <Col key={coupon._id}>
                <CouponCard coupon={coupon} type={type || ""} />
              </Col>
            ))}
          </Row>
        ) : (
          <div className="text-center py-5">
            <p className="text-muted">No other coupons available in this collection.</p>
          </div>
        )}
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="top-end" containerPosition='fixed' className="p-3">
        <Toast 
          show={showToast} 
          onClose={() => setShowToast(false)} 
          delay={3000} 
          autohide 
          bg={toastVariant}
          className="text-white"
        >
          <Toast.Body>
            {toastVariant === 'success' ? (
              <i className="bi bi-check-circle-fill me-2"></i>
            ) : (
              <i className="bi bi-exclamation-triangle-fill me-2"></i>
            )}
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}

// Extracted Modal Components for better organization
const ShareModal = ({ show, onHide }: { show: boolean; onHide: () => void }) => (
  <Modal show={show} onHide={onHide} centered>
    <Modal.Body className="p-4 text-center">
      <h4 className="mb-4">Share this item</h4>
      <div className="d-flex justify-content-center gap-3 mb-4">
        {['facebook', 'twitter', 'instagram', 'slack'].map((social) => (
          <Button 
            key={social}
            variant="outline-primary" 
            className="p-3 rounded-circle"
          >
            <i className={`bi bi-${social}`}></i>
          </Button>
        ))}
      </div>
      <Button variant="danger" onClick={onHide}>
        <i className="bi bi-x-lg me-1"></i> Close
      </Button>
    </Modal.Body>
  </Modal>
);

const LinkModal = ({ show, onHide, onCopy }: { 
  show: boolean; 
  onHide: () => void;
  onCopy: () => void;
}) => (
  <Modal show={show} onHide={onHide} centered>
    <Modal.Body className="p-4 text-center">
      <h4 className="mb-4">Copy item link</h4>
      <Card className="mb-4">
        <Card.Body className="p-3">
          <code className="user-select-all">
            {typeof window !== 'undefined' ? window.location.href : ''}
          </code>
        </Card.Body>
      </Card>
      <div className="d-flex justify-content-center gap-3">
        <Button variant="primary" onClick={onCopy}>
          <i className="bi bi-clipboard me-1"></i> Copy
        </Button>
        <Button variant="danger" onClick={onHide}>
          <i className="bi bi-x-lg me-1"></i> Close
        </Button>
      </div>
    </Modal.Body>
  </Modal>
);

const WalletModal = ({ 
  show, 
  onHide,  
  handleConnectWallet,
  handlePurchase,
  token,
  isPurchasing
}: { 
  show: boolean;
  onHide: () => void;
  handleConnectWallet: (type: string) => void;
  handlePurchase: () => void;
  token: Token | null;
  isPurchasing: boolean;
}) => (
  <Modal show={show} onHide={onHide} size="lg" centered>
    <Modal.Header closeButton>
      <Modal.Title>Connect Wallet</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p className="text-center mb-4">
        Choose how you want to connect. If you don&apos;t have a wallet, you can
        select a provider and create one.
      </p>
      
      <Row className="g-4">
        <Col md={6}>
          <Card className="h-100 cursor-pointer" onClick={() => handleConnectWallet('metamask')}>
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={4} className="text-center">
                  <AppImage 
                    src="/assets/img/bg-img/metamask.png" 
                    alt="MetaMask" 
                    width={80} 
                    height={80}
                  />
                </Col>
                <Col xs={8}>
                  <h5>
                    <i className="bi bi-patch-check-fill text-success me-2"></i>
                    MetaMask
                  </h5>
                  <p className="text-muted small mb-0">Ethereum wallet</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={6}>
          <Card className="h-100 cursor-pointer" onClick={() => handleConnectWallet('polkadot-js')}>
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={4} className="text-center">
                  <AppImage 
                    src="/assets/img/bg-img/polkadot.png" 
                    alt="Polkadot" 
                    width={80} 
                    height={80}
                  />
                </Col>
                <Col xs={8}>
                  <h5>
                    <i className="bi bi-patch-check-fill text-success me-2"></i>
                    Polkadot
                  </h5>
                  <p className="text-muted small mb-0">Polkadot wallet</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {token && (
        <>
          <Divider />
          
          <Card className="cursor-pointer" onClick={handlePurchase}>
            <Card.Body>
              <Row className="align-items-center">
                <Col xs={4} className="text-center">
                  <AppImage 
                    src="/assets/img/unique_network_cover.jpeg" 
                    alt="UNQ Balance" 
                    width={80} 
                    height={80}
                    className="rounded"
                  />
                </Col>
                <Col xs={8}>
                  <h5>
                    <i className="bi bi-patch-check-fill text-success me-2"></i>
                    Purchase with UNQ
                  </h5>
                  <p className="text-muted small mb-0">
                    Price: {token.priceOfCoupon.toFixed(2)} UNQ
                  </p>
                  {isPurchasing && (
                    <Spinner animation="border" size="sm" className="mt-2" />
                  )}
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </>
      )}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        Cancel
      </Button>
    </Modal.Footer>
  </Modal>
);

const CouponCard = ({ coupon, type }: { coupon: Token; type: string }) => (
  <Card className="h-100 shadow-sm">
    <div className="position-relative" style={{ height: '200px' }}>
      <AppImage
        src={coupon.tokenImageUrl}
        alt={coupon.tokenName}
        fill
        className="card-img-top"
        style={{ objectFit: 'cover' }}
      />
      <Badge bg="primary" className="position-absolute top-0 start-0 m-2">
        <i className="bi bi-fire me-1"></i>
        Featured
      </Badge>
    </div>
    <Card.Body>
      <div className="d-flex justify-content-between mb-3">
        <div className="d-flex align-items-center">
          <div className="position-relative me-2">
            <AppImage
              src={coupon.profileImageUrl || `https://api.dicebear.com/6.x/identicon/svg?seed=${encodeURIComponent(coupon.ownerName)}`}
              alt={coupon.ownerName}
              width={40}
              height={40}
              className="rounded-circle shadow-sm"
            />
            <Badge bg="success" className="position-absolute bottom-0 end-0 p-1 rounded-circle border border-2 border-white">
              <i className="bi bi-check"></i>
            </Badge>
          </div>
          <div>
            <h6 className="mb-0">{coupon.tokenName}</h6>
            <small className="text-muted">@{coupon.ownerName}</small>
          </div>
        </div>
        <div className="text-end">
          <small className="d-block text-muted">Price</small>
          <h6 className="mb-0">{coupon.priceOfCoupon.toFixed(2)} UNQ</h6>
        </div>
      </div>
      <Button 
        variant="primary" 
        className="w-100"
        as="link"
        href={`/${type}/${coupon.collectionId}/${coupon.tokenId}`}
      >
        View Details
      </Button>
    </Card.Body>
  </Card>
);