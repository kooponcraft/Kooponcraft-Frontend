'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button, 
  Form, 
  Modal, 
  Spinner,
  Toast,
  ToastContainer,
  Badge
} from 'react-bootstrap';
import { getUserTokens } from '@/lib/getUserTokens';
import { initiateCouponSwap } from '@/lib/initiateCouponSwap';
import { acceptCouponSwap } from '@/lib/acceptCouponSwap';
import { redeemCoupon } from '@/lib/redeemCoupon';
import AppImage from '@/components/common/AppImage';

export default function MyTokenArea() {
  const router = useRouter();
  const [tokens, setTokens] = useState<{
    standard: Token[];
    special: Token[];
    item: Token[];
  }>({ standard: [], special: [], item: [] });
  const [loading, setLoading] = useState(false);
  
  // Modal states
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showAcceptModal, setShowAcceptModal] = useState(false);
  
  // Form data states
  const [transferData, setTransferData] = useState({
    tokenId: '',
    collectionId: '',
    desiredTokenId: '',
    desiredCollectionId: '',
    recipientAddress: ''
  });
  
  const [swapData, setSwapData] = useState({
    swapOfferId: ''
  });

  // Toast notifications
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState<'success' | 'danger' | 'warning'>('success');

  useEffect(() => {
    fetchUserTokens();
  }, []);

  const fetchUserTokens = async () => {
      setLoading(true);
      const data = await getUserTokens()
      if (data?.success) {
        setTokens({
          standard: data.standardTokens || [],
          special: data.specialTokens || [],
          item: data.itemTokens || []
        });
      }
      setLoading(false);
  };

  const showNotification = (message: string, variant: 'success' | 'danger' | 'warning') => {
    setToastMessage(message);
    setToastVariant(variant);
    setShowToast(true);
  };

  const handleTransferSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
        const data = await initiateCouponSwap({
            ownTokenId: transferData.tokenId,
            ownCollectionId: transferData.collectionId,
            desiredTokenId: transferData.desiredTokenId,
            desiredCollectionId: transferData.desiredCollectionId,
            recipientAddress: transferData.recipientAddress
          })

      if (data.success) {
        showNotification(data.message || "Swap initiated successfully!", 'success');
        setShowTransferModal(false);
        setTimeout(() => fetchUserTokens(), 1500);
      } else {
        showNotification(data.message || "Failed to initiate swap", 'danger');
      }
    } catch (error) {
      console.error('Error initiating swap:', error);
      showNotification('An error occurred while initiating swap', 'danger');
    } finally {
      setLoading(false);
    }
  };

  const handleSwapSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
        const data = await acceptCouponSwap(swapData.swapOfferId);

      if (data.success) {
        showNotification(data.message || "Swap completed successfully!", 'success');
        setShowAcceptModal(false);
        setTimeout(() => fetchUserTokens(), 1500);
      } else {
        showNotification(data.message || "Failed to complete swap", 'danger');
      }
    } catch (error) {
      console.error('Error completing swap:', error);
      showNotification('An error occurred while completing swap', 'danger');
    } finally {
      setLoading(false);
    }
  };

  const handleRedeemToken = async (tokenId: string, collectionId: string) => {
    if (!confirm('Are you sure you want to request to redeem this token?')) return;
    
    try {
        const data = await redeemCoupon({
        tokenId,
        collectionId
        })

      if (data.success) {
        showNotification(data.message || "Redeem request submitted!", 'success');
        setTimeout(() => fetchUserTokens(), 1500);
      } else {
        const variant = data.message === "Redeem request already made for this coupon." 
          ? 'warning' 
          : 'danger';
        showNotification(data.message || "Failed to redeem token", variant);
      }
    } catch (error) {
      console.error('Error redeeming token:', error);
      showNotification('An error occurred while redeeming token', 'danger');
    }
  };

  const renderTokenCard = (token: Token, tokenType: 'standard' | 'special' | 'item') => {
    const couponUrl = tokenType === "standard" ? `/coupon/${token.collectionId}/${token.tokenId}` : '#';
    const isOwnedByStore = token.metadata && token.metadata.storeAddress === token.tokenOwnerAddress;
    
    let tokenStatus = '';
    if (!token.isPurchased && tokenType === 'standard') {
      tokenStatus = 'In Marketplace';
    } else if (!token.isPurchased && tokenType === 'item') {
      tokenStatus = 'In Store';
    } else if (!token.isPurchased && tokenType === 'special') {
      tokenStatus = 'Redeemable';
    } else if (token.isPurchased) {
      tokenStatus = 'Redeemable';
    }

    const badgeVariant = tokenType === 'special' ? 'warning' : 
                        tokenType === 'item' ? 'primary' : 'dark';

    return (
      <Col key={`${token.collectionId}-${token.tokenId}`} xs={12} sm={6} xl={4} xxl={4}>
        <Card className="border-0">
          <Card.Body>
            <div className="img-wrap position-relative">
              <Card.Img 
                variant="top" 
                src={token.tokenImageUrl} 
                alt={token.tokenName}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Badge bg={badgeVariant} className="position-absolute text-center">
                {tokenType}
              </Badge>
            </div>
            <Row className="gx-2 align-items-center mt-3">
              <Col xs={12}>
                <span className="d-block fz-12">
                  <i className="bi bi-bag me-1"></i>{tokenStatus}
                </span>
              </Col>
            </Row>
            <Row className="gx-2 align-items-center mt-2">
              <Col xs={7}>
                <div className="name-info d-flex align-items-center">
                  <div className="author-img position-relative">
                    <AppImage className="shadow" src="/assets/img/bg-img/u2.jpg" alt="" />
                    <i className="bi bi-check position-absolute bg-success"></i>
                  </div>
                  <div className="name-author">
                    <a 
                      className="name d-block hover-primary fw-bold text-truncate" 
                      href={couponUrl}
                      title={token.tokenName}
                    >
                      {token.tokenName}
                    </a>
                    <a className="author d-block fz-12 hover-primary text-truncate" href="#">
                      #{token.tokenId}-{token.collectionId}
                    </a>
                  </div>
                </div>
              </Col>
              <Col xs={5}>
                <div className="price text-end">
                  <span className="fz-12 d-block">Current Price</span>
                  <h6 className="mb-0">
                    UNQ {token.priceOfCoupon.toFixed(2)}
                  </h6>
                </div>
              </Col>
              {!isOwnedByStore && (
                <Row className="mt-3">
                  {tokenType === 'standard' && (
                    <Col xs={6}>
                      <Button 
                        variant="primary" 
                        className="rounded-pill btn-sm w-100"
                        onClick={() => router.push(`/initiate-coupon-swap?cid=${token.collectionId}&tid=${token.tokenId}`)}
                      >
                        Swap
                      </Button>
                    </Col>
                  )}
                  <Col xs={tokenType === 'standard' ? 6 : 12}>
                    <Button 
                      variant="danger" 
                      className="rounded-pill btn-sm w-100"
                      onClick={() => handleRedeemToken(token.tokenId, token.collectionId)}
                    >
                      Redeem
                    </Button>
                  </Col>
                </Row>
              )}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <>
      
      <div className="admin-wrapper">
        <Container>
          <h3 className="mb-3">All My Coupons</h3>
          {loading ? (
            <div className="text-center my-5">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <Row className="g-4" id="collections-container">
              {tokens.standard.length === 0 && 
               tokens.special.length === 0 && 
               tokens.item.length === 0 ? (
                <Col>
                  <p>No tokens found</p>
                </Col>
              ) : (
                <>
                  {tokens.standard.map(token => renderTokenCard(token, 'standard'))}
                  {tokens.special.map(token => renderTokenCard(token, 'special'))}
                  {tokens.item.map(token => renderTokenCard(token, 'item'))}
                </>
              )}
            </Row>
          )}
        </Container>
      </div>

      {/* Transfer Modal */}
      <Modal show={showTransferModal} onHide={() => setShowTransferModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Swap Token with another UNQ wallet beneficiary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleTransferSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Collection ID:</Form.Label>
              <Form.Control 
                type="text" 
                value={transferData.collectionId}
                onChange={(e) => setTransferData({...transferData, collectionId: e.target.value})}
                readOnly 
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Token ID:</Form.Label>
              <Form.Control 
                type="text" 
                value={transferData.tokenId}
                onChange={(e) => setTransferData({...transferData, tokenId: e.target.value})}
                readOnly 
                required 
              />
            </Form.Group>

            <hr />
            <h4 className="text-dark">Recipient Details</h4>
            
            <Form.Group className="mb-3">
              <Form.Label>Destination Token ID:</Form.Label>
              <Form.Control 
                type="text" 
                value={transferData.desiredTokenId}
                onChange={(e) => setTransferData({...transferData, desiredTokenId: e.target.value})}
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Destination Collection ID:</Form.Label>
              <Form.Control 
                type="text" 
                value={transferData.desiredCollectionId}
                onChange={(e) => setTransferData({...transferData, desiredCollectionId: e.target.value})}
                required 
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Destination Wallet Address:</Form.Label>
              <Form.Control 
                type="text" 
                value={transferData.recipientAddress}
                onChange={(e) => setTransferData({...transferData, recipientAddress: e.target.value})}
                required 
              />
            </Form.Group>

            <Button 
              variant="danger" 
              type="submit" 
              className="w-100" 
              disabled={loading}
              onClick={(e) => {
                if (!confirm('Are you sure you want to proceed with this swap initiation?')) {
                  e.preventDefault();
                }
              }}
            >
              {loading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  <span className="ms-2">Please Wait...</span>
                </>
              ) : 'Initiate Swap'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Accept Modal */}
      <Modal show={showAcceptModal} onHide={() => setShowAcceptModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Swap Token with another UNQ wallet beneficiary</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSwapSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Coupon Swap Offer ID:</Form.Label>
              <Form.Control 
                type="text" 
                value={swapData.swapOfferId}
                onChange={(e) => setSwapData({...swapData, swapOfferId: e.target.value})}
                required 
              />
            </Form.Group>

            <Button 
              variant="danger" 
              type="submit" 
              className="w-100" 
              disabled={loading}
              onClick={(e) => {
                if (!confirm('Are you sure you want to proceed with this swap?')) {
                  e.preventDefault();
                }
              }}
            >
              {loading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  <span className="ms-2">Please Wait...</span>
                </>
              ) : 'Complete Swap'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Toast Notification */}
      <ToastContainer position="top-end" className="p-3">
        <Toast 
          show={showToast} 
          onClose={() => setShowToast(false)} 
          delay={3000} 
          autohide
          bg={toastVariant}
        >
          <Toast.Body className="text-white">
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>

    </>
  );
}