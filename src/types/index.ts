type Collection = {
    collectionId: string;
    name: string;
    collectionImageUrl?: string;
    tokens?: any[];
    createdAt: string;
  };
  
  type MintData = {
    collectionId: string;
    tokenName: string;
    tokenDescription: string;
    priceOfCoupon: string;
    tokenType: string;
    itemCategory: string;
    imageFile: File | null;
    imagePreview: string;
  };
  type Token = {
    tokenId: string;
    collectionId: string;
    tokenName: string;
    tokenImageUrl: string;
    priceOfCoupon: number;
    isPurchased: boolean;
    metadata?: {
      storeAddress: string;
    };
    tokenOwnerAddress: string;
  };
  
  type TokenResponse = {
    success: boolean;
    allTokens: {
      standardTokens: Token[];
      specialTokens: Token[];
      itemTokens: Token[];
    };
    message?: string;
  };