'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Button, 
  Badge,
  Spinner,
  Toast,
  ToastContainer
} from 'react-bootstrap';
import { getStoreTransactions } from '@/lib/getStoreTransactions';

export default function MyStoreArea() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [storeSummary, setStoreSummary] = useState<StoreSummary | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Toast notifications
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState<'success' | 'danger'>('success');

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      setLoading(true);
      const data = await getStoreTransactions()
      
      if (data?.success) {
        if (data.purchases && data.purchases.length > 0) {
          setPurchases(data.purchases);
          setStoreSummary({
            totalSales: data.totalSales,
            totalItems: data.totalItems,
            totalTransactions: data.totalTransactions,
            highestBuyer: data.highestBuyer
          });
        }
      } else {
        setError('No transactions found');
      }
    } catch (err) {
      console.error('Error fetching transactions:', err);
      setError('Error fetching transactions');
      showNotification('Failed to load transactions', 'danger');
    } finally {
      setLoading(false);
    }
  };

  const showNotification = (message: string, variant: 'success' | 'danger') => {
    setToastMessage(message);
    setToastVariant(variant);
    setShowToast(true);
  };

  return (
    <>
      
      <div className="admin-wrapper">
        <Container>
          <Row className="g-4 justify-content-center pb-4">
            <Col xs={12}>
              <div className="text-center">
                <h4 className="mb-4 mt-5">Welcome to your store! You can create new items and track transactions here.</h4>
              </div>
            </Col>
            <Col xs={12} xl={6}>
              <Card className="wallet-card shadow-sm">
                <Card.Body className="px-4">
                  <div className="d-flex align-items-center">
                    <h4 className="mb-0 me-3">Create New Item</h4>
                    <Button 
                      variant="warning" 
                      className="rounded-pill ms-auto btn-sm"
                      onClick={() => router.push('/create-item')}
                    >
                      Create <i className="ms-1 bi bi-arrow-right"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} xl={6}>
              <Card className="wallet-card shadow-sm">
                <Card.Body className="px-4">
                  <div className="d-flex align-items-center">
                    <h4 className="mb-0 me-3">My Store Items</h4>
                    <Button 
                      variant="primary" 
                      className="rounded-pill ms-auto btn-sm"
                      onClick={() => router.push('/my-store-items')}
                    >
                      View <i className="ms-1 bi bi-arrow-right"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="g-4">
            <Col md={8}>
              <div className="tab-content">
                <div className="tab-pane fade show active">
                  <div className="notification-content-wrap">
                    {loading ? (
                      <div className="text-center my-5">
                        <Spinner animation="border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>
                      </div>
                    ) : error ? (
                      <p className="text-danger">{error}</p>
                    ) : purchases.length > 0 ? (
                      <ul className="notification-list ps-0 mb-0">
                        {purchases.map((transaction, index) => (
                          <li key={index} className="py-3">
                            <a href="#">
                              {transaction.nameOfItemPurchased}
                              <Badge bg="dark" className="fz-12 rounded-pill ms-auto">
                                UNQ {transaction.totalPrice.toFixed(2)}
                              </Badge>
                            </a>
                            <p className="mb-0">Purchased by {transaction.buyerName}. Quantity: 1</p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No purchases have been made from your store yet.</p>
                    )}
                  </div>
                </div>
              </div>
            </Col>
            <Col md={4}>
              {storeSummary && (
                <Card className="wallet-card shadow-sm">
                  <Card.Body className="px-4">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h5 className="card-title mb-0">Store Summary</h5>
                    </div>
                    <div className="summary-content">
                      <p className="mb-2">
                        <strong>Total Sales:</strong>{storeSummary.totalSales.toFixed(2)} UNQ
                      </p>
                      <p className="mb-2">
                        <strong>Total Items Sold:</strong> {storeSummary.totalItems}
                      </p>
                      <p className="mb-2">
                        <strong>Total Transactions:</strong> {storeSummary.totalTransactions}
                      </p>
                      <p className="mb-0">
                        <strong>Highest Buyer:</strong> {storeSummary.highestBuyer.buyerName} 
                        (Spent {storeSummary.highestBuyer.totalPurchase.toFixed(2)}) UNQ
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              )}
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
          <Toast.Body className="text-white">
            {toastMessage}
          </Toast.Body>
        </Toast>
      </ToastContainer>

    </>
  );
}