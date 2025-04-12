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