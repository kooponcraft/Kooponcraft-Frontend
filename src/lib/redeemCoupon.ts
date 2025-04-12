import appAxios from "@/config/axios";

export const redeemCoupon = async (data: any) => {
    const response = await appAxios.post('/redeemCoupon', data);
    return response.data;
}