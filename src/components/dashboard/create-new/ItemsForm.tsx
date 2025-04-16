import { createItem } from '@/lib/createItem';
import React, { useRef, useState } from 'react'
import { Form, Row, Col, Button, Spinner } from 'react-bootstrap'

const ItemsForm = ({ showNotification }: { showNotification: any }) => {
      const [loading, setLoading] = useState(false);
      const [formData, setFormData] = useState({
        name: '',
        price: 0,
        itemImage: null as File | null
      });
      const [imageError, setImageError] = useState('');
      const fileInputRef = useRef<HTMLInputElement>(null);

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
          if (validateImage(file)) {
            setFormData({
              ...formData,
              itemImage: file
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
    
      const validateImage = (file: File) => {
        const maxSize = 5 * 1024 * 1024; // 5MB
        const validTypes = ['image/png', 'image/jpg', 'image/jpeg'];
        
        const fileTypeValid = validTypes.includes(file.type);
        const fileSizeValid = file.size <= maxSize;
        
        return fileTypeValid && fileSizeValid;
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
    
        if (!formData.itemImage) {
          setImageError('Please select an image for the item.');
          setLoading(false);
          return;
        }
    
        const reader = new FileReader();
        reader.readAsDataURL(formData.itemImage);
        
        reader.onload = async () => {
          const base64Image = reader.result as string;
          
          try {
            const data = await createItem({
                nameOfItem: formData.name,
                priceOfItem: formData.price,
                itemImage: base64Image
            });
    
            if (data.success) {
              showNotification(data.message || 'Item created successfully!', 'success');
              setFormData({
                name: "",
                price: 0,
                itemImage: null
              })
              // await fetchUserBalance();
            } else {
              showNotification(data.error || 'Failed to create item', 'danger');
            }
          } catch (error: any) {
              console.error('Error creating item:', error);
              showNotification(error?.response?.data?.message || error?.message || 'An error occurred while creating item', 'danger');
          } finally {
            setLoading(false);
          }
    
          reader.onerror = () => {
            console.error('Error reading file:', reader.error);
            showNotification(reader?.error?.message || 'Error reading image file', 'danger');
          };
      };
    };

  return (
    <Form onSubmit={handleSubmit} id="create-item-form">
        <Row className="align-items-center">
            <Col xs={12}>
            <h4 className="mb-4">Create Item for your store</h4>
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
                <Col xs={12} className="mb-4 mb-md-0">
                <Form.Group>
                    <Form.Label className="mb-2 fz-16 text-white">Price</Form.Label>
                    <Form.Control
                    type='number'
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="Enter a Price"
                    required
                    />
                </Form.Group>
                </Col>
            </Row>
            
            <Col xs={12} className="mt-4">
                <Form.Group className="mb-4">
                <Form.Label className="mb-2 fz-16 text-white">Item Image</Form.Label>
                <Form.Control
                    type="file"
                    name="itemImage"
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
  )
}

export default ItemsForm