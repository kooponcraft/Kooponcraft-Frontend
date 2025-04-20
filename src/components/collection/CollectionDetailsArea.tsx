'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Badge,
} from 'react-bootstrap';
import { getCollectionDetails } from '@/lib/getCollectionDetails';
import AppImage from '../common/AppImage';

export default function CollectionDetailPage() {
  const { collectionId }: { collectionId: string } = useParams();
  
  const [collection, setCollection] = useState<Collection | null>(null);
  const [filteredTokens, setFilteredTokens] = useState<Token[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const collection = await getCollectionDetails(collectionId);
        setCollection(collection);
        setFilteredTokens(collection.tokens || []);
      } catch (error) {
        console.error('Error fetching collection:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCollection();
  }, [collectionId]);

  useEffect(() => {
    if (!collection?.tokens) return;

    let results = [...collection.tokens];

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      results = results.filter(token => 
        token.tokenName.toLowerCase().includes(term) || 
        token.tokenDescription.toLowerCase().includes(term)
      );
    }

    // Apply sorting
    results.sort((a, b) => {
      switch(sortBy) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'price-asc':
          return (a.priceOfCoupon || 0) - (b.priceOfCoupon || 0);
        case 'price-desc':
          return (b.priceOfCoupon || 0) - (a.priceOfCoupon || 0);
        default:
          return 0;
      }
    });

    setFilteredTokens(results);
  }, [collection, searchTerm, sortBy]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!collection) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <p>Collection not found</p>
      </div>
    );
  }

  return (
    <div className="admin-wrapper">
      
      <Container fluid="xl" className="collection-detail-wrapper">
        {/* Collection Header */}
        <div className="collection-header position-relative">
          <div className="banner-wrapper">
            <div className="banner-overlay"></div>
            <AppImage
              src={collection?.collectionImageUrl || ""}
              alt={collection.name}
              className="collection-banner"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          
          <div className="position-relative">
            <div className="collection-info-card">
              <div className="collection-avatar">
                <AppImage
                  src={collection?.collectionImageUrl || ""}
                  alt={collection.name}
                  width={130}
                  height={130}
                  className="rounded-circle border-4 border-white"
                  style={{ objectFit: 'cover', border: "solid" }}
                />
              </div>
              <div className="collection-details mt-4">
                <h1 className="collection-title h2 h3-sm text-white">{collection.name}</h1>
                <div className="collection-meta d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 gap-md-4 mb-3">
                  <div className="creator d-flex align-items-center">
                    <span className="text-muted">Created by</span>
                    <Link href="#" className="creator-link ms-2 d-flex align-items-center text-white">
                      <AppImage
                        src="/assets/img/bg-img/u1.jpg"
                        alt="Creator"
                        width={24}
                        height={24}
                        className="creator-avatar rounded-circle"
                      />
                      <span className="ms-2" title={collection.walletAddress}>
                        {`${collection.walletAddress?.substring(0, 6)}...${collection.walletAddress?.slice(-5)}`}
                      </span>
                    </Link>
                  </div>
                  <div className="collection-stats d-flex gap-4">
                    <div className="stat-item">
                      <span className="stat-value text-white">{collection.tokens?.length || 0}</span>
                      <span className="stat-label text-muted">items</span>
                    </div>
                  </div>
                </div>
                <p className="collection-description text-white-50">
                  {collection.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Collection Content */}
        <div className="mt-5 px-4">
          {/* Filter & Sort Section */}
          <div className="filter-section mb-4">
            <Row className="align-items-center gy-3">
              <Col xs={12} md={6}>
                <Form.Group controlId="searchItems">
                  <Form.Control
                    type="text"
                    placeholder="Search items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <div className="d-flex justify-content-start justify-content-md-end gap-3">
                  <Form.Select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="newest">Recently Added</option>
                    <option value="oldest">Oldest</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </Form.Select>
                </div>
              </Col>
            </Row>
          </div>

          {/* Items Grid */}
          <Row className="g-4">
            {filteredTokens.length > 0 ? (
              filteredTokens.map((token) => (
                <Col key={token._id} xs={12} sm={6} lg={4} xl={3}>
                  <TokenCard token={token} collectionId={collectionId} />
                </Col>
              ))
            ) : (
              <Col xs={12}>
                <Card className="text-center p-5">
                  <Card.Body>
                    <h5>No items found</h5>
                    <p className="text-muted">
                      {searchTerm ? 'Try a different search term' : 'This collection has no items yet'}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
        </div>
      </Container>

    </div>
  );
}

function TokenCard({ token, collectionId }: { token: Token; collectionId: string }) {
  return (
    <Card className="h-100 border-0 shadow-sm">
      <div className="card-img-top position-relative" style={{ height: '200px' }}>
        <AppImage
          src={token.tokenImageUrl}
          alt={token.tokenName}
          fill
          style={{ objectFit: 'cover' }}
          className="w-100"
        />
        <Badge 
          bg={token.tokenType === 'special' ? 'warning' : 'primary'} 
          className="position-absolute top-0 end-0 m-2"
        >
          {token.tokenType === 'special' ? 'Special' : 'Standard'}
        </Badge>
      </div>
      <Card.Body>
        <Card.Title className="mb-2 fs-6">{token.tokenName}</Card.Title>
        <Card.Text className="text-muted small mb-3">
          {token.tokenDescription}
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
          <div className="price">
            <span className="text-muted small">Price</span>
            <div className="fw-bold">{token.priceOfCoupon} UNQ</div>
          </div>
          <Button 
            as="link"
            href={`/item/${collectionId}/${token.tokenId}`}
            variant="primary"
            size="sm"
          >
            View Details
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}