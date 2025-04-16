interface User {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  accountAddress: string;
  collectedTokens: any[];
  mnemonic: string;
  walletBalance: number;
  points: number;
  lastPointsAssigned: string;
  currentStreak: number;
  lastStreakUpdate: string,
  highestStreak: number;
  profileImageUrl: string;
  firstUse: boolean;
  walletType: string | null;
  createdAt: string;
  __v: number
}

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


type Purchase = {
  nameOfItemPurchased: string;
  totalPrice: number;
  buyerName: string;
};

type StoreSummary = {
  totalSales: number;
  totalItems: number;
  totalTransactions: number;
  highestBuyer: {
    buyerName: string;
    totalPurchase: number;
  };
};


type Coupon = {
  _id: string;
  tokenId: string;
  collectionId: string;
  tokenName: string;
  tokenImageUrl: string;
  priceOfCoupon: number;
  ownerName: string;
};


type LeaderboardUser = {
  position: number;
  username: string;
  points: number;
  last1DayChange: number;
  last7DaysChange: number;
};