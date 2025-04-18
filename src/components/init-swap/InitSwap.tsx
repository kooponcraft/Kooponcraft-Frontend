'use client';

import { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Toast, ToastContainer, Alert } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import appAxios from '@/config/axios';

export default function SwapArea() {
  const [ownCoupon, setOwnCoupon] = useState<Coupon | null>(null);
  const [swappableCoupons, setSwappableCoupons] = useState<Coupon[]>([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState<'success' | 'danger'>('success');
  const [isLoading, setIsLoading] = useState(false);
  const [currentLoadingId, setCurrentLoadingId] = useState<string | null>(null);
  const searchParams = useSearchParams()
  const cid = searchParams.get("cid") || -1
  const tid = searchParams.get("tid") || -1
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await appAxios(`/initiate-coupon-swap?cid=${cid}&tid=${tid}`)
        setOwnCoupon(data.coupon);
        setSwappableCoupons(data.swappableCoupons);
      } catch (error: any) {
        console.log("Error initiating coupon swap: ", error)
        showNotification(error.response.data.error || error.message || 'Failed to load coupons', 'danger');
      }
    };

    fetchData();
  }, []);

  const showNotification = (message: string, variant: 'success' | 'danger') => {
    setToastMessage(message);
    setToastVariant(variant);
    setShowToast(true);
  };

  const handleSwapRequest = async (desiredCoupon: Coupon) => {
    if (!ownCoupon) return;

    setIsLoading(true);
    setCurrentLoadingId(`${desiredCoupon.collectionId}-${desiredCoupon.tokenId}`);

    try {
      const response = await fetch('/api/initiateCouponSwap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ownTokenId: ownCoupon.tokenId,
          ownCollectionId: ownCoupon.collectionId,
          desiredTokenId: desiredCoupon.tokenId,
          desiredCollectionId: desiredCoupon.collectionId,
          recipientAddress: desiredCoupon.tokenOwnerAddress
        }),
      });

      const data = await response.json();

      if (data.success) {
        showNotification('Swap request placed successfully!', 'success');
        // router.push('/tokens');
      } else {
        showNotification(data.message || 'Failed to send swap request', 'danger');
      }
    } catch (error) {
      showNotification('Failed to send swap request', 'danger');
    } finally {
      setIsLoading(false);
      setCurrentLoadingId(null);
    }
  };

  return (
    <>
    
      <div className="admin-wrapper">
        <div className="container">
          <Row className="g-4 justify-content-center">
            <Col xs={12}>
              <div className="text-center">
                <h4 className="mb-4 mt-5">Swap your coupon with other coupons of the same price.</h4>
              </div>
            </Col>
            {
              toastMessage.toLowerCase() == "coupon not found" ? 
                <Alert variant='danger' >No coupon available for swap</Alert>
               : 
               <>
                {/* My Coupon */}
                <Col xs={12} sm={10} md={6} xl={5}>
                {ownCoupon && (
                  <Card className="nft-card shadow-sm">
                    <Card.Body>
                      <Row className="align-items-center g-3">
                        <Col xs={4}>
                          <input type="hidden" name="ownTokenId" id="ownTokenId" value={ownCoupon.tokenId} />
                          <input type="hidden" name="ownCollectionId" id="ownCollectionId" value={ownCoupon.collectionId} />

                          <div className="img-wrap position-relative">
                            <Image 
                              src={ownCoupon.tokenImageUrl} 
                              alt={ownCoupon.tokenName} 
                              width={200} 
                              height={200}
                              className="img-fluid"
                            />
                            <span className="badge bg-danger position-absolute px-2 py-1">
                              #{ownCoupon.tokenId}
                            </span>
                          </div>
                        </Col>
                        <Col xs={8}>
                          <div className="meta-info">
                            <div className="name-info d-flex align-items-center mb-3">
                              <div className="author-img position-relative">
                                <Image 
                                  src="/assets/img/bg-img/u2.jpg" 
                                  alt="User" 
                                  width={40} 
                                  height={40}
                                  className="shadow rounded-circle"
                                />
                                <i className="bi bi-check position-absolute bg-success rounded-circle p-1"></i>
                              </div>
                              <div className="name-author ms-2">
                                <Link 
                                  href={`/getCoupon/${ownCoupon.collectionId}/${ownCoupon.tokenId}`}
                                  className="name d-block hover-primary fw-bold text-truncate"
                                  title={ownCoupon.tokenName}
                                >
                                  {ownCoupon.tokenName}
                                </Link>
                                <span className="author d-block fz-12 hover-primary text-truncate">
                                  @my_coupon
                                </span>
                              </div>
                            </div>
                            <div className="price-bid d-flex align-items-center">
                              <div className="price me-2 me-sm-3">
                                <h6 className="mb-0 d-inline-block fz-14 border border-2 border-info rounded py-1 px-2 text-info">
                                  {ownCoupon.priceOfCoupon} UNQ
                                </h6>
                              </div>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                )}
              </Col>

              {/* Swap Icon */}
              <Col xs={12} xl={2} className="pt-4">
                <Card className="shadow-sm">
                  <Card.Body className="px-4">
                    <div className="d-flex align-items-center justify-content-center">
                      <div className="img-wrap">
                        <Image 
                          src="/assets/img/swap.png" 
                          alt="Swap" 
                          width={60} 
                          height={60}
                        />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Receiver Coupons */}
              <Col xs={12} sm={10} md={6} xl={5}>
                {swappableCoupons.length > 0 ? (
                  swappableCoupons.map((coupon) => (
                    <Card key={`${coupon.collectionId}-${coupon.tokenId}`} className="nft-card shadow-sm mb-3">
                      <Card.Body>
                        <Row className="align-items-center g-3">
                          <Col xs={4}>
                            <div className="img-wrap position-relative">
                              <Image 
                                src={coupon.tokenImageUrl} 
                                alt={coupon.tokenName} 
                                width={200} 
                                height={200}
                                className="img-fluid"
                              />
                              <span className="badge bg-danger position-absolute px-2 py-1">
                                #{coupon.tokenId}
                              </span>
                            </div>
                          </Col>
                          <Col xs={8}>
                            <div className="meta-info">
                              <div className="name-info d-flex align-items-center mb-3">
                                <div className="author-img position-relative">
                                  <Image 
                                    src="/assets/img/bg-img/u1.jpg" 
                                    alt="User" 
                                    width={40} 
                                    height={40}
                                    className="shadow rounded-circle"
                                  />
                                  <i className="bi bi-check position-absolute bg-success rounded-circle p-1"></i>
                                </div>
                                <div className="name-author ms-2">
                                  <Link 
                                    href={`/getCoupon/${coupon.collectionId}/${coupon.tokenId}`}
                                    className="name d-block hover-primary fw-bold text-truncate"
                                    title={coupon.tokenName}
                                  >
                                    {coupon.tokenName}
                                  </Link>
                                  <span className="author d-block fz-12 hover-primary text-truncate">
                                    @{coupon.tokenOwnerAddress?.slice(0, 6)}...{coupon.tokenOwnerAddress?.slice(-4)}
                                  </span>
                                </div>
                              </div>
                              <div className="price-bid d-flex align-items-center">
                                <div className="price me-2 me-sm-3">
                                  <h6 className="mb-0 d-inline-block fz-14 border border-2 border-info rounded py-1 px-2 text-info">
                                    {coupon.priceOfCoupon} UNQ
                                  </h6>
                                </div>
                                
                                <Button
                                  variant="primary"
                                  size="sm"
                                  className="d-flex align-items-center"
                                  onClick={() => handleSwapRequest(coupon)}
                                  disabled={isLoading && currentLoadingId === `${coupon.collectionId}-${coupon.tokenId}`}
                                >
                                  {isLoading && currentLoadingId === `${coupon.collectionId}-${coupon.tokenId}` ? (
                                    <>
                                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                      Requesting...
                                    </>
                                  ) : (
                                    'Request Swap'
                                  )}
                                </Button>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  ))
                ) : (
                  <Card className="nft-card shadow-sm mb-3">
                    <Card.Body>
                      <Row className="align-items-center g-3">
                        <Col xs={12}>
                          <div className="text-center">
                            <h6>No available coupons to swap with :(</h6>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                )}
              </Col>
              </>
            }
          </Row>
        </div>
      </div>

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