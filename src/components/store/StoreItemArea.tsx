'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button, 
  Spinner,
  Toast,
  ToastContainer,
  Breadcrumb
} from 'react-bootstrap';
import { getStores } from '@/lib/getStores';
import { getStoreCoupons } from '@/lib/getStoreCoupons';
import { purchaseCoupon } from '@/lib/purchaseCoupon';

export default function StoreItemArea() {
  const pathname = usePathname();
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(true);
  const [purchasing, setPurchasing] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Toast notifications
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState<'success' | 'danger'>('success');

  useEffect(() => {
    (
        async() => {
            const storeName = pathname.split('/')[2];
            const stores = await getStores()
            const accountAddress = stores.find((store: any) => (store.username as string).split(" ")[0].toLowerCase() == storeName.toLowerCase())?.accountAddress
            loadItems(accountAddress);
        }
    )()
  }, [pathname]);

  const loadItems = async (accountAddress: string) => {
      setLoading(true);
      const coupons = await getStoreCoupons(accountAddress)
        setCoupons(coupons);
      setLoading(false);
  };

  const handlePurchase = async (coupon: Coupon) => {
    try {
      setPurchasing(coupon._id);
      const data = await purchaseCoupon({
        toStringokenId: coupon.tokenId,
        collectionId: coupon.collectionId
      })

      if (data.success) {
        showNotification('Purchase successful! Visit your dashboard to redeem it.', 'success');
      } else {
        showNotification(data.error || 'Purchase failed', 'danger');
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'An unexpected error occurred';
      if (errorMessage === 'Token is not valid') {
        showNotification('You need to be signed in to purchase a coupon', 'danger');
      } else {
        showNotification(errorMessage, 'danger');
      }
    } finally {
      setPurchasing(null);
    }
  };

  const showNotification = (message: string, variant: 'success' | 'danger') => {
    setToastMessage(message);
    setToastVariant(variant);
    setShowToast(true);
  };

  return (
    <>
      <div className="explore-items-2-wrapper">
        <Container fluid>
          <Row className="g-4 g-xl-5 justify-content-center">
            <Col xs={12} md={7} lg={8} xxl={9}>
              {/* Loading Skeletons
              {loading && (
                <Row className="g-4 justify-content-center" id="loading-cards">
                  {[1, 2, 3].map((item) => (
                    <Col key={item} xs={12} sm={6} lg={4} xl={4}>
                      <Card className="shadow-sm">
                        <div className="card is-loading">
                          <div className="image" style={{ 
                            height: '200px',
                            background: '#eee',
                            backgroundImage: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
                            backgroundSize: '200% 100%',
                            animation: '1.5s shine linear infinite'
                          }}></div>
                          <Card.Body>
                            <h2 style={{ 
                              height: '30px',
                              background: '#eee',
                              backgroundImage: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
                              backgroundSize: '200% 100%',
                              animation: '1.5s shine linear infinite'
                            }}></h2>
                            <p style={{ 
                              height: '70px',
                              background: '#eee',
                              backgroundImage: 'linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%)',
                              backgroundSize: '200% 100%',
                              animation: '1.5s shine linear infinite'
                            }}></p>
                          </Card.Body>
                        </div>
                      </Card>
                    </Col>
                  ))}
                </Row>
              )} */}

              {/* Coupons List */}
              <Row className="g-4 justify-content-center" id="itemsContainer">
                {error ? (
                  <Col>
                    <p className="text-danger">{error}</p>
                  </Col>
                ) : coupons.length > 0 ? (
                  coupons.map((coupon) => (
                    <Col key={coupon._id} xs={12} sm={6} lg={4} xl={4}>
                      <Card className="nft-card shadow-sm">
                        <Card.Body>
                          <div className="img-wrap">
                            <img 
                              className="fixed-size" 
                              src={coupon.tokenImageUrl} 
                              alt={coupon.tokenName}
                              style={{
                                width: '100%',
                                height: '150px',
                                objectFit: 'cover',
                                borderTopLeftRadius: '5px',
                                borderTopRightRadius: '5px'
                              }}
                            />
                          </div>
                          
                          {/* Availability Info */}
                          <Row className="gx-2 align-items-center mt-3">
                            <Col xs={8}>
                              <span className="d-block fz-12">
                                <i className="bi bi-bag me-1"></i>Available
                              </span>
                            </Col>
                            <Col xs={4} className="text-end">
                              <button className="wishlist-btn" type="button">
                                <i className="bi"></i>
                              </button>
                            </Col>
                          </Row>
                          
                          {/* Meta Info */}
                          <Row className="gx-2 align-items-center mt-2">
                            <Col xs={8}>
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative">
                                  <img className="shadow" src="/assets/img/bg-img/u2.jpg" alt="" />
                                  <i className="bi bi-check position-absolute bg-success"></i>
                                </div>
                                <div className="name-author">
                                  <span 
                                    className="name d-block hover-primary fw-bold text-truncate" 
                                    title={coupon.tokenName}
                                  >
                                    {coupon.tokenName}
                                  </span>
                                  <span className="author d-block fz-12 hover-primary text-truncate">
                                    @{coupon.ownerName}
                                  </span>
                                </div>
                              </div>
                            </Col>
                            <Col xs={4}>
                              <div className="price text-end">
                                <span className="fz-12 d-block">Current Price</span>
                                <h6 className="mb-0">
                                  {coupon.priceOfCoupon.toFixed(2)} UNQ
                                </h6>
                              </div>
                            </Col>
                            <Col xs={12}>
                              <Button
                                variant="primary"
                                className="rounded-pill btn-sm mt-3 w-100"
                                onClick={() => handlePurchase(coupon)}
                                disabled={purchasing === coupon._id}
                              >
                                {purchasing === coupon._id ? (
                                  <>
                                    <Spinner
                                      as="span"
                                      animation="border"
                                      size="sm"
                                      role="status"
                                      aria-hidden="true"
                                    />
                                    <span className="ms-2">Please wait...</span>
                                  </>
                                ) : (
                                  'Purchase'
                                )}
                              </Button>
                            </Col>
                          </Row>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))
                ) : (
                  !loading && (
                    <Col>
                      <p>No items found.</p>
                    </Col>
                  )
                )}
              </Row>

              {/* Pagination - Add if needed */}
              <Row>
                <Col xs={12}>
                  {/* Pagination would go here */}
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      
      {/* Toast Notification */}
      <ToastContainer position="top-end" containerPosition='fixed' className="p-3">
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

      <style jsx>{`
        .fixed-size {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }
        
        .card.is-loading .image,
        .card.is-loading h2,
        .card.is-loading p {
          background: #eee;
          background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
          border-radius: 5px;
          background-size: 200% 100%;
          animation: 1.5s shine linear infinite;
        }
        
        .card.is-loading .image {
          height: 200px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
        }
        
        .card.is-loading h2 {
          height: 30px;
        }
        
        .card.is-loading p {
          height: 70px;
        }
        
        @keyframes shine {
          to {
            background-position-x: -200%;
          }
        }
      `}</style>
    </>
  );
}