import appAxios from "@/config/axios";

export async function getAllRedeemRequests() {
    try {
        const response = await appAxios.get('/getAllRedeemRequests');
        return response.data.redeemRequests;
    } catch (error) {
        console.error('Error fetching swap offers:', error);
        return error;
    }
}