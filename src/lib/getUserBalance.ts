import appAxios from "@/config/axios";

export async function getUserBalance() {
    try {
        const response = await appAxios.get(`/getUserBalance`);
        return response.data;
    } catch (error: any) {
        console.error('Error fetching user balance:', error);
        return error.response?.data.error || 'Failed to fetch user balance';
    }
}