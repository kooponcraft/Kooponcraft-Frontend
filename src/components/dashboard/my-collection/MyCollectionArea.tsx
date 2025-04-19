

'use client'
import AppImage from "@/components/common/AppImage";
import { getCollections } from "@/lib/getCollections";
import { mintItem } from "@/lib/mintItem";
import { mintToken } from "@/lib/mintToken";
import Link from "next/link";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from 'react';
import { Modal, Form, Button, Card, Col, Container, FormControl, FormSelect, Row, Spinner, ToastContainer, Toast } from "react-bootstrap";

const MyCollectionArea = () => {
  const router = useRouter();
  const [collections, setCollections] = useState<Collection[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [loading, setLoading] = useState(false);
  
  // Mint Token Modal State
  const [showMintModal, setShowMintModal] = useState(false);
  const [mintData, setMintData] = useState<MintData>({
    collectionId: '',
    tokenName: '',
    tokenDescription: '',
    priceOfCoupon: '',
    tokenType: 'standard',
    itemCategory: '',
    imageFile: null,
    imagePreview: ''
  });
  
  // Mint Item Modal State
  const [showMintItemModal, setShowMintItemModal] = useState(false);
  const [mintItemData, setMintItemData] = useState<Omit<MintData, 'tokenType'>>({
    collectionId: '',
    tokenName: '',
    tokenDescription: '',
    priceOfCoupon: '',
    itemCategory: '',
    imageFile: null,
    imagePreview: ''
  });
  const [fileError, setFileError] = useState('');
  const [mintFileError, setMintFileError] = useState('');
  const [toast, setToast] = useState({
    show: false,
    message: '',
    bg: ''
  });

  useEffect(() => {
    fetchUserCollections();
  }, []);

  const fetchUserCollections = async () => {
    setLoading(true);
    const data = await getCollections()
    const sortedCollections = data?.sort((a: Collection, b: Collection) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    setCollections(sortedCollections || data);
      setLoading(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleMintToken = (collection: Collection) => {
    setMintData({
      ...mintData,
      collectionId: collection.collectionId
    });
    setShowMintModal(true);
  };

  const handleMintItem = (collection: Collection) => {
    setMintItemData({
      ...mintItemData,
      collectionId: collection.collectionId
    });
    setShowMintItemModal(true);
  };

  const handleMintSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!mintData.imageFile) {
      setFileError('Please select an image file');
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('collectionId', mintData.collectionId);
      formData.append('tokenName', mintData.tokenName);
      formData.append('tokenDescription', mintData.tokenDescription);
      formData.append('priceOfCoupon', mintData.priceOfCoupon);
      formData.append('tokenType', mintData.tokenType);
      formData.append('itemCategory', mintData.itemCategory);
      formData.append('image', mintData.imageFile);

      const url = mintData.tokenType === 'standard' ? '/mintToken' : '/mintSpecialToken';
      
      const data = await mintToken(url, formData);

      if (data.success) {
        setToast({
          show: true,
          message: data.message,
          bg: 'success'
        })
        setShowMintModal(false);
        fetchUserCollections();
      }
    } catch (error: any) {
      console.error('Error minting token:', error);
      setToast({
        show: true,
        message: error?.response.data.message || error?.message || 'An error occurred!',
        bg: 'danger'
      })
    } finally {
      setLoading(false);
    }
  };

  const handleMintItemSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!mintItemData.imageFile) {
      setMintFileError('Please select an image file');
      setLoading(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append('collectionId', mintItemData.collectionId);
      formData.append('tokenName', mintItemData.tokenName);
      formData.append('tokenDescription', mintItemData.tokenDescription);
      formData.append('priceOfCoupon', mintItemData.priceOfCoupon);
      formData.append('itemCategory', mintItemData.itemCategory);
      formData.append('isItem', 'true');
      formData.append('image', mintItemData.imageFile);

      const data = await mintItem(formData)

      if (data.success) {
        setToast({
          show: true,
          message: data.message,
          bg: 'success'
        })
        setShowMintItemModal(false);
        fetchUserCollections();
      }
    } catch (error: any) {
      console.error('Error minting item:', error);
      setToast({
        show: true,
        message: error?.response.data.message || error?.message || 'An error occurred!',
        bg: 'danger'
      })
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, isItem = false) => {
    if (!e.target.files) return;
    
    const file = e.target.files[0];
    const maxSize = 5 * 1024 * 1024; // 5MB
    const validTypes = ['image/png', 'image/jpg', 'image/jpeg'];

    if (!validTypes.includes(file.type)) {
      if (isItem) {
        setMintFileError('Please upload a valid image (PNG, JPG, JPEG)');
      } else {
        setFileError('Please upload a valid image (PNG, JPG, JPEG)');
      }
      return;
    }

    if (file.size > maxSize) {
      if (isItem) {
        setMintFileError('Image must be less than 5MB');
      } else {
        setFileError('Image must be less than 5MB');
      }
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      if (isItem) {
        setMintItemData({
          ...mintItemData,
          imageFile: file,
          imagePreview: reader.result as string
        });
        setMintFileError('');
      } else {
        setMintData({
          ...mintData,
          imageFile: file,
          imagePreview: reader.result as string
        });
        setFileError('');
      }
    };
    reader.readAsDataURL(file);
  };

  const filteredCollections = collections
    ?.filter(collection => collection.name.toLowerCase().includes(searchTerm))
    ?.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      
      if (sortBy === 'newest') return dateB - dateA;
      if (sortBy === 'oldest') return dateA - dateB;
      return nameA.localeCompare(nameB);
    });

  return (
    <>
    <div className="create-new-button">
        <Link className="shadow-lg btn btn-warning" href="/collection/create" data-bs-toggle="tooltip" data-bs-placement="left" title="Create New NFT"><i className="fz-18 bi bi-plus-lg"></i></Link>
      </div>
      <div className="admin-wrapper">
        <Container fluid className="px-4">
          <div className="collections-header mb-4">
            <h3 className="mb-3">My Collections</h3>
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
              <div className="search-filter d-flex flex-column flex-md-row gap-3">
                <FormControl 
                  type="text" 
                  placeholder="Search collections..." 
                  onChange={handleSearch}
                />
                <FormSelect 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="newest">Newest</option>
                  <option value="oldest">Oldest</option>
                  <option value="name">Name</option>
                </FormSelect>
              </div>
              <Button 
                variant="primary" 
                className="w-100 w-md-initial"
                onClick={() => router.push('/collection/create')}
              >
                Create Collection
              </Button>
            </div>
          </div>
          
          {loading ? (
            <div className="text-center my-5">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <Row className="g-4" id="collections-container">
              {filteredCollections?.length > 0 ? (
                filteredCollections.map(collection => (
                  <Col key={collection.collectionId} xs={12} sm={6} lg={4} className="mb-4">
                    <Card className="h-100 border-0 shadow-sm">
                      <div 
                        className="collection-banner position-relative" 
                        style={{ cursor: 'pointer' }}
                        onClick={() => router.push(`/collection/${collection.collectionId}`)}
                      >
                        {collection.collectionImageUrl ? (
                          <Card.Img 
                            variant="top" 
                            src={collection.collectionImageUrl} 
                            className="collection-image" 
                            style={{ height: '200px', objectFit: 'cover' }}
                          />
                        ) : (
                          <div 
                            className="placeholder-image bg-light d-flex align-items-center justify-content-center" 
                            style={{ height: '200px' }}
                          >
                            <i className="bi bi-image text-muted" style={{ fontSize: '2rem' }}></i>
                          </div>
                        )}
                        <div className="collection-stats position-absolute bottom-0 start-0 w-100 p-2 bg-gradient-dark">
                          <div className="d-flex justify-content-between text-white">
                            <div className="d-flex align-items-center">
                              <i className="bi bi-collection me-1"></i>
                              <small style={{ fontSize: '0.8rem' }}>
                                {collection.tokens ? (collection.tokens.length === 1 ? '1 item' : `${collection.tokens.length} items`) : '0 items'}
                              </small>
                            </div>
                            <div className="d-flex align-items-center">
                              <i className="bi bi-calendar me-1"></i>
                              <small style={{ fontSize: '0.8rem' }}>
                                {new Date(collection.createdAt).toLocaleDateString()}
                              </small>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Card.Body className="p-3">
                        <Card.Title className="mb-2 text-truncate" style={{ fontSize: '1rem' }}>
                          {collection.name}
                        </Card.Title>
                        <div className="d-flex flex-column flex-sm-row gap-2">
                          <Button 
                            variant="primary" 
                            className="btn-mint-token w-100"
                            style={{ 
                              background: 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)',
                              border: 'none',
                              borderRadius: '20px',
                              padding: '6px 12px',
                              fontSize: '0.875rem',
                              fontWeight: '500'
                            }}
                            onClick={() => handleMintToken(collection)}
                          >
                            <i className="bi bi-plus-circle me-1"></i> Mint Token
                          </Button>
                          <Button 
                            variant="danger" 
                            className="btn-mint-item w-100"
                            style={{ 
                              background: 'linear-gradient(135deg, #FF6B6B 0%, #FF000D 100%)',
                              border: 'none',
                              borderRadius: '20px',
                              padding: '6px 12px',
                              fontSize: '0.875rem',
                              fontWeight: '500'
                            }}
                            onClick={() => handleMintItem(collection)}
                          >
                            <i className="bi bi-box me-1"></i> Mint Item
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <Col>
                  <p>No collections found</p>
                </Col>
              )}
            </Row>
          )}
        </Container>
      </div>

      {/* Mint Token Modal */}
      <Modal show={showMintModal} onHide={() => setShowMintModal(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Mint Token</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleMintSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Collection ID:</Form.Label>
              <Form.Control 
                type="text" 
                value={mintData.collectionId} 
                readOnly 
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Token Name:</Form.Label>
              <Form.Control 
                type="text" 
                value={mintData.tokenName}
                onChange={(e) => setMintData({...mintData, tokenName: e.target.value})}
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price of Coupon:</Form.Label>
              <Form.Control 
                type="number" 
                min="0" 
                max="5" 
                step="0.01" 
                placeholder="Enter price in UNQ (max 5)" 
                value={mintData.priceOfCoupon}
                onChange={(e) => setMintData({...mintData, priceOfCoupon: e.target.value})}
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Token Description:</Form.Label>
              <Form.Control 
                type="text" 
                value={mintData.tokenDescription}
                onChange={(e) => setMintData({...mintData, tokenDescription: e.target.value})}
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Token Type:</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  id="standardToken"
                  label="Standard Token"
                  name="tokenType"
                  value="standard"
                  checked={mintData.tokenType === 'standard'}
                  onChange={() => setMintData({...mintData, tokenType: 'standard'})}
                  required
                />
                <Form.Check
                  type="radio"
                  id="specialToken"
                  label="Special Token"
                  name="tokenType"
                  value="special"
                  checked={mintData.tokenType === 'special'}
                  onChange={() => setMintData({...mintData, tokenType: 'special'})}
                  required
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Item Category:</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  id="pizzaCategory"
                  label="Pizza"
                  name="itemCategory"
                  value="pizza"
                  checked={mintData.itemCategory === 'pizza'}
                  onChange={() => setMintData({...mintData, itemCategory: 'pizza'})}
                  required
                />
                <Form.Check
                  type="radio"
                  id="coffeeCategory"
                  label="Coffee"
                  name="itemCategory"
                  value="coffee"
                  checked={mintData.itemCategory === 'coffee'}
                  onChange={() => setMintData({...mintData, itemCategory: 'coffee'})}
                  required
                />
                <Form.Check
                  type="radio"
                  id="deliveryCategory"
                  label="Delivery"
                  name="itemCategory"
                  value="delivery"
                  checked={mintData.itemCategory === 'delivery'}
                  onChange={() => setMintData({...mintData, itemCategory: 'delivery'})}
                  required
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Upload Image:</Form.Label>
              <Form.Control 
                type="file" 
                accept=".png, .jpg, .jpeg" 
                // @ts-ignore
                onChange={(e) => handleImageUpload(e)}
                required 
              />
              {fileError && <small className="text-danger">{fileError}</small>}
            </Form.Group>

            <Row>
              <Col xs={6}>
                <div className="mb-3">
                  <div className="border rounded" style={{ width: '150px', height: '150px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {mintData.imagePreview ? (
                      <AppImage src={mintData.imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    ) : (
                      <span>Preview</span>
                    )}
                  </div>
                </div>
              </Col>
            </Row>

            <Button variant="danger" type="submit" className="w-100" disabled={loading}>
              {loading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  <span className="ms-2">Please Wait...</span>
                </>
              ) : 'Complete Mint'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Mint Item Modal */}
      <Modal show={showMintItemModal} onHide={() => setShowMintItemModal(false)} scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Mint Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleMintItemSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Collection ID:</Form.Label>
              <Form.Control 
                type="text" 
                value={mintItemData.collectionId} 
                readOnly 
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Token Name:</Form.Label>
              <Form.Control 
                type="text" 
                value={mintItemData.tokenName}
                onChange={(e) => setMintItemData({...mintItemData, tokenName: e.target.value})}
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price of Item:</Form.Label>
              <Form.Control 
                type="number" 
                min="0" 
                max="5" 
                step="0.01" 
                placeholder="Enter price in UNQ (max 5)" 
                value={mintItemData.priceOfCoupon}
                onChange={(e) => setMintItemData({...mintItemData, priceOfCoupon: e.target.value})}
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Token Description:</Form.Label>
              <Form.Control 
                type="text" 
                value={mintItemData.tokenDescription}
                onChange={(e) => setMintItemData({...mintItemData, tokenDescription: e.target.value})}
                required 
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Item Category:</Form.Label>
              <div>
                <Form.Check
                  type="radio"
                  id="mint_pizzaCategory"
                  label="Pizza"
                  name="mint_itemCategory"
                  value="pizza"
                  checked={mintItemData.itemCategory === 'pizza'}
                  onChange={() => setMintItemData({...mintItemData, itemCategory: 'pizza'})}
                  required
                />
                <Form.Check
                  type="radio"
                  id="mint_coffeeCategory"
                  label="Coffee"
                  name="mint_itemCategory"
                  value="coffee"
                  checked={mintItemData.itemCategory === 'coffee'}
                  onChange={() => setMintItemData({...mintItemData, itemCategory: 'coffee'})}
                  required
                />
                <Form.Check
                  type="radio"
                  id="mint_deliveryCategory"
                  label="Delivery"
                  name="mint_itemCategory"
                  value="delivery"
                  checked={mintItemData.itemCategory === 'delivery'}
                  onChange={() => setMintItemData({...mintItemData, itemCategory: 'delivery'})}
                  required
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Upload Image:</Form.Label>
              <Form.Control 
                type="file" 
                accept=".png, .jpg, .jpeg"
                // @ts-ignore 
                onChange={(e) => handleImageUpload(e, true)}
                required 
              />
              {mintFileError && <small className="text-danger">{mintFileError}</small>}
            </Form.Group>

            <Row>
              <Col xs={6}>
                <div className="mb-3">
                  <div className="border rounded" style={{ width: '150px', height: '150px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {mintItemData.imagePreview ? (
                      <AppImage src={mintItemData.imagePreview} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    ) : (
                      <span>Preview</span>
                    )}
                  </div>
                </div>
              </Col>
            </Row>

            <Button variant="danger" type="submit" className="w-100" disabled={loading}>
              {loading ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  <span className="ms-2">Please Wait...</span>
                </>
              ) : 'Complete Item Mint'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <ToastContainer position="top-end" containerPosition="fixed" className="p-3" style={{ zIndex: 9999 }}>
        <Toast show={toast.show} onClose={() => setToast({ ...toast, show: false })} bg={toast.bg} delay={3000} autohide>
          <Toast.Body className="text-white">{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default MyCollectionArea;