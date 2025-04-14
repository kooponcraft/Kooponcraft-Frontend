'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Container, 
  Row, 
  Col, 
  Card, 
  Form, 
  Button, 
  Spinner,
  Toast,
  ToastContainer
} from 'react-bootstrap';
import { getUserBalance } from '@/lib/getUserBalance';
import { createCollection } from '@/lib/createCollection';

export default function CreateNewArea() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    tokenPrefix: '',
    collectionImage: null as File | null
  });
  const [imageError, setImageError] = useState('');
  
  // Toast notifications
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVariant, setToastVariant] = useState<'success' | 'danger'>('success');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showNotification = (message: string, variant: 'success' | 'danger') => {
    setToastMessage(message);
    setToastVariant(variant);
    setShowToast(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (validateCollectionImage(file)) {
        setFormData({
          ...formData,
          collectionImage: file
        });
        setImageError('');
      } else {
        setImageError('Please upload a valid image (PNG, JPG, JPEG) and make sure it\'s less than 5MB.');
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    }
  };

  const validateCollectionImage = (file: File) => {
    const maxSize = 5 * 1024 * 1024; // 5MB
    const validTypes = ['image/png', 'image/jpg', 'image/jpeg'];
    
    const fileTypeValid = validTypes.includes(file.type);
    const fileSizeValid = file.size <= maxSize;
    
    return fileTypeValid && fileSizeValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.collectionImage) {
      setImageError('Please select an image for the collection.');
      setLoading(false);
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(formData.collectionImage);
    
    reader.onload = async () => {
      const base64Image = reader.result as string;
      
      try {
        const data = await createCollection({...formData, collectionImageUrl: base64Image});

        if (data.success) {
          showNotification(data.message || 'Collection created successfully!', 'success');
          // await fetchUserBalance();
          router.push('/my-collections')
        } else {
          showNotification(data.error || 'Failed to create collection', 'danger');
        }
      } catch (error: any) {
          console.error('Error creating collection:', error);
          showNotification(error?.response?.data?.message || error?.message || 'An error occurred while creating collection', 'danger');
      } finally {
        setLoading(false);
      }

      reader.onerror = () => {
        console.error('Error reading file:', reader.error);
        showNotification(reader?.error?.message || 'Error reading image file', 'danger');
      };
  };
};



  const fetchUserBalance = async () => {
    const data = await getUserBalance()
    return data
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
                      <Form onSubmit={handleSubmit} id="create-collection-form">
                        <Row className="align-items-center">
                          <Col xs={12}>
                            <h4 className="mb-4">Create Collection</h4>
                            <Row>
                              <Col xs={12}>
                                <Form.Group className="mb-4">
                                  <Form.Label className="mb-2 fz-16 text-white">Name</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter a name"
                                    required
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            <Row>
                              <Col xs={12} md={6} className="mb-4 mb-md-0">
                                <Form.Group>
                                  <Form.Label className="mb-2 fz-16 text-white">Description</Form.Label>
                                  <Form.Control
                                    as="textarea"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    rows={4}
                                    required
                                  />
                                </Form.Group>
                              </Col>
                              <Col xs={12} md={6}>
                                <Form.Group>
                                  <Form.Label className="mb-2 fz-16 text-white">Token prefix</Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="tokenPrefix"
                                    value={formData.tokenPrefix}
                                    onChange={handleInputChange}
                                    placeholder="Enter a prefix"
                                    required
                                  />
                                </Form.Group>
                              </Col>
                            </Row>
                            
                            <Col xs={12} className="mt-4">
                              <Form.Group className="mb-4">
                                <Form.Label className="mb-2 fz-16 text-white">Collection Image</Form.Label>
                                <Form.Control
                                  type="file"
                                  name="collectionImage"
                                  ref={fileInputRef}
                                  onChange={handleFileChange}
                                  accept=".png, .jpg, .jpeg"
                                  required
                                />
                                {imageError && (
                                  <small className="text-danger">{imageError}</small>
                                )}
                              </Form.Group>
                            </Col>

                            <Col xs={12}>
                              <Button
                                variant="primary"
                                type="submit"
                                className="rounded-pill w-100 mb-3"
                                disabled={loading}
                              >
                                {loading ? (
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
                                  'Create'
                                )}
                              </Button>
                            </Col>
                          </Col>
                        </Row>
                      </Form>
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