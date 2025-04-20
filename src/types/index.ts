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
    description: string;
    collectionImageUrl?: string;
    tokens?: any[];
    walletAddress: string;
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

  
interface Token {
  _id: string;
  tokenId: string;
  collectionId: string;
  tokenName: string;
  tokenType: string;
  tokenImageUrl: string;
  ownerName: string;
  profileImageUrl?: string;
  priceOfCoupon: number;
  isPurchased: boolean;
  tokenDescription?: string;
  tokenOwnerAddress: string;
  metadata?: {
    storeAddress: string;
  };
}

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
  tokenOwnerAddress: string;
};


type LeaderboardUser = {
  position: number;
  username: string;
  points: number;
  last1DayChange: number;
  last7DaysChange: number;
};


type CouponType = {
  name: string;
  image: string;
  color: string;
};

interface GameState {
  moves: number;
  points: number;
  matchedPairs: number;
  isLocked: boolean;
  flippedCards: number[];
  matchedCards: number[]; // New field to track matched cards
  startTime: number;
  timer: string;
  canPlay: boolean;
  cooldownMessage: string;
}