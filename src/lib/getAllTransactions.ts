import appAxios from "@/config/axios";

export async function getAllTransactions() {
    try {
        const response = await appAxios.get('/buyerPurchases');
        return response.data.purchases;
    } catch (error) {
        console.error('Error fetching transactions:', error);
        return []
    }
}