'use client';

import { useState } from 'react';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Toast,
  ToastContainer
} from 'react-bootstrap';
import CollectionForm from './CollectionForm';
import { notFound, usePathname } from 'next/navigation';
import ItemsForm from './ItemsForm';

export default function CreateNewArea() {
  const pathname = usePathname()

  // Toast notifications
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState<'success' | 'danger'>('success');

  const showNotification = (message: string, variant: 'success' | 'danger') => {
    setToastMessage(message);
    setToastVariant(variant);
    setShowToast(true);
  };


  return (
    <>
      
      <div className="admin-wrapper">
        <Container>
          <Row className="g-4 justify-content-center">
            <Col xs={12} lg={10} xl={9} xxl={9}>
              <div className="tab-content">
                <div className="tab-pane fade show active">
                  <Card>
                    <Card.Body className="p-3 p-sm-5">
                      { pathname == "/items/create" ? <ItemsForm showNotification={showNotification}/> : pathname == "/collection/create" ? <CollectionForm showNotification={showNotification}/> : null }
                    </Card.Body>
                  </Card>
                </div>
              </div>
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