declare global {
    interface Window {
        injectedWeb3?: Record<string, any>;
    }
}


interface AccountMeta {
    network?: string;
    name?: string;
    genesisHash?: string;
}

interface Account {
    address?: string;
    meta?: AccountMeta;
}

const walletMapping = {
    "polkadot-js": "Polkadot.js",
    talisman: "Talisman",
    "subwallet-js": "SubWallet",
    nova: "Nova Wallet",
    fearless: "Fearless Wallet",
    mathwallet: "Math Wallet",
    clover: "Clover",
    polkagate: "PolkaGate",
    pontem: "Pontem",
};

const determineWalletType = (injectedKey: string) => {
    return walletMapping[injectedKey as keyof typeof walletMapping] || injectedKey;
};

const determineNetworkFromAccount = (account: Account): string => {
    if (account.address) {
        const SS58_ACALA = 10;
        try {
        } catch (e) {
            console.log("Address format check error:", e);
        }
    }

    if (account.meta) {
        if (
            account.meta.network === "acala" ||
            (account.meta.name && account.meta.name.toLowerCase().includes("acala"))
        ) {
            return "Acala";
        }

        if (account.meta.genesisHash) {
            return determineNetworkFromGenesis(account.meta.genesisHash);
        }
    }

    return "Unknown";
};

const determineNetworkFromGenesis = (genesisHash: string) => {
    const genesisMapping = {
        "0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3":
            "Polkadot",
        "0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe":
            "Kusama",
        "0xfc41b9bd8ef8fe53d58c7ea67c794c7ec9a73daf05e6d54b14ff6342c99ba64c":
            "Acala",
        "0x0000000000000000000000000000000000000000000000000000000000000000":
            "Acala",
        "0xbaf5aabe40646d11f0ee8abbdc64f4a4b7674925cba08e4a05ff9ebed6e2126b":
            "Karura",
        "0x9eb76c5184c4ab8679d2d5d819fdf90b9c001403e9e17da2e14b6d8aec4029c6":
            "Astar",
        "0xfe58ea77779b7abda7da4ec526d14db9b1e9cd40a217c34892af80a9b332b76d":
            "Moonbeam",
    };

    return genesisMapping[genesisHash as keyof typeof genesisMapping] || "Unknown";
};


export const connectWallet = async (wallet: keyof typeof walletMapping) => {
    try {
        if (!window.injectedWeb3) {
            // modal
            throw new Error(`${determineWalletType(wallet)} Extension Not Found`)
        }

        // Simulate a delay to ensure injectedWeb3 is ready
        await new Promise((resolve) => setTimeout(resolve, 100));
        const allInjected = await window.injectedWeb3;

        const availableWallets = Object.keys(allInjected);

        // Select the requested wallet or fallback to the first available wallet
        // const selectedWallet = allInjected[wallet]
        //     ? wallet
        //     : (availableWallets[0] as keyof typeof walletMapping);

        const selectedWallet = wallet

        const injected = allInjected[selectedWallet];
        if (!injected) {
            throw new Error(
                `No compatible ${determineWalletType(wallet)} wallet extension found`
            );
        }

        const extension = await injected.enable("KooponCraft");
        const accounts = await extension.accounts.get();

        if (!accounts || accounts.length === 0) {
            // modal
            throw new Error(`Please create or import an account in your ${determineWalletType(wallet)} extension first`)
        }

        const account = accounts[0];

        const networkType = determineNetworkFromAccount(account);
        const walletType =
            networkType === "Unknown" ||
            networkType === "Polkadot" ||
            networkType === "Kusama"
                ? determineWalletType(selectedWallet)
                : networkType;

        return {
            connected: true,
            networkType,
            walletType,
            ...account,
        };
    } catch (error: any) {
        return {
            connected: false,
            error: error.message || "An error occurred while connecting to the wallet",
        };
    }
};
