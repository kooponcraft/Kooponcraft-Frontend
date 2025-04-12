import appAxios from "@/config/axios";

export async function getSwapOffers() {
    try {
        const response = await appAxios.get('/getSwapOffers');
        return response.data;
    } catch (error) {
        console.error('Error fetching swap offers:', error);
        return error;
    }
}