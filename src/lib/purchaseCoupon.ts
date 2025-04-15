import appAxios from "@/config/axios";

export const purchaseCoupon = async (data: any) => {
    const response = await appAxios.post('/purchaseCoupon', data);
    return response.data
}