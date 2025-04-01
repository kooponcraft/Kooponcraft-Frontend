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