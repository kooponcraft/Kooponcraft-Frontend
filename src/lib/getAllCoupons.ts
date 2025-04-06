import appAxios from "@/config/axios";

export async function getAllCoupons(params?: any) {
    try {
        const response = await appAxios.get('/getAllCoupons', { params });
        return response.data.coupons;
    } catch (error) {
        console.error('Error fetching coupons:', error);
        return error
    }
}