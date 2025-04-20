'use client';

import AppImage from '@/components/common/AppImage';
import { getUser } from '@/lib/auth/getUser';
import { getStoreItems } from '@/lib/getStoreItems';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Spinner,
  Toast,
  ToastContainer
} from 'react-bootstrap';

type StoreItem = {
  tokenId: string;
  tokenName: string;
  tokenImageUrl: string;
  priceOfCoupon: number;
  tokenOwnerAddress: string;
};

export default function MyStoreItems() {
  const [items, setItems] = useState<StoreItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Toast notifications
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState<'success' | 'danger'>('success');
  const [user, setUser] = useState<User | null>(null);
    
    useEffect(() => {
    (
      async () => {
        setUser(await getUser())
      }
    )()
    fetchStoreItems();
  }, []);

  const fetchStoreItems = async () => {
      setLoading(true);
      const data = await getStoreItems();
      if (data?.success) {
        if (data.items && data.items.length > 0) {
          setItems(data.items);
        } else {
          setError('No items found in your store');
        }
      } else {
        setError(data || 'Failed to fetch store items');
      }
      setLoading(false);
  };

  const showNotification = (message: string, variant: 'success' | 'danger') => {
    setToastMessage(message);
    setToastVariant(variant);
    setShowToast(true);
  };

  return (
    <>
      {        user?.isAdmin && (
        <div className="create-new-button">
          <Link className="shadow-lg btn btn-warning" href="/items/create" data-bs-toggle="tooltip" data-bs-placement="left" title="Create New Item">
            <i className="fz-18 bi bi-plus-lg"></i>
          </Link>
        </div>
      )}
      <div className="admin-wrapper">
        <Container>
          <Row className="g-4 g-xl-5">
            <Col xs={12} md={7} lg={8} xxl={9}>
              <h3 className="mb-3">My Store Items</h3>
              
              {loading ? (
                <div className="text-center my-5">
                  <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                </div>
              ) : error ? (
                <p className="text-danger">{error}</p>
              ) : (
                <Row className="g-4 justify-content-center" id="itemsContainer">
                  {items.map((item) => (
                    <Col key={item.tokenId} xs={12} sm={6} md={12} lg={6} xxl={4}>
                      <Card className="nft-card shadow-sm">
                        <Card.Body>
                          <div className="img-wrap">
                            <AppImage 
                              src={item.tokenImageUrl} 
                              alt={item.tokenName}
                              style={{ width: '100%', height: 'auto' }}
                            />
                          </div>
                          <br />
                          <Row className="gx-2 align-items-center mt-2">
                            <Col xs={8}>
                              <div className="name-info d-flex align-items-center">
                                <div className="author-img position-relative">
                                  <AppImage className="shadow" src="/assets/img/bg-img/u2.jpg" alt="" />
                                  <i className="bi bi-check position-absolute bg-success"></i>
                                </div>
                                <div className="name-author">
                                  <span 
                                    className="name d-block hover-primary fw-bold text-truncate" 
                                    title={item.tokenName}
                                  >
                                    {item.tokenName}
                                  </span>
                                  <span className="author d-block fz-12 hover-primary text-truncate">
                                    @{item.tokenOwnerAddress.substring(0, 6)}...{item.tokenOwnerAddress.substring(item.tokenOwnerAddress.length - 4)}
                                  </span>
                                </div>
                              </div>
                            </Col>
                            <Col xs={4}>
                              <div className="price text-end">
                                <span className="fz-12 d-block">Current Price</span>
                                <h6 className="mb-0">UNQ {item.priceOfCoupon.toFixed(2)}</h6>
                              </div>
                            </Col>
                          </Row>
                          {/* Uncomment if you need these buttons
                          <Row className="gx-2 align-items-center mt-3">
                            <Col xs={4}><Button variant="primary" size="sm" className="rounded-pill">View</Button></Col>
                            <Col xs={4}><Button variant="warning" size="sm" className="rounded-pill">Couponize</Button></Col>
                            <Col xs={4} className="text-end">
                              <Button variant="link" size="sm" className="btn-minimal hover-primary">
                                <i className="bi bi-activity me-1"></i>Activity
                              </Button>
                            </Col>
                          </Row>
                          */}
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              )}

              {/* Pagination - Uncomment if needed
              <Row>
                <Col xs={12}>
                  <div className="funto-pagination mt-70">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center mb-0">
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">...</a></li>
                        <li className="page-item"><a className="page-link" href="#">9</a></li>
                      </ul>
                    </nav>
                  </div>
                </Col>
              </Row>
              */}
            </Col>
          </Row>
        </Container>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="top-end" className="p-3">
        <Toast 
          show={showToast} 
          onClose={() => setShowToast(false)} 
          delay={3000} 
          autohide
          bg={toastVariant}
        >
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body className="text-white">
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>

    </>
  );
}