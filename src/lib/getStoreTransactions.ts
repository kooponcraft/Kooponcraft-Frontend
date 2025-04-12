import appAxios from "@/config/axios";

export const getStoreTransactions = async () => {
    try {
        const response = await appAxios.get('/storeTransactions');
        return response.data;
    } catch (error) {
        console.error('Error fetching store transactions:', error);
        return error;
    }
    
}