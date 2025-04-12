import appAxios from "@/config/axios";

export const initiateCouponSwap = async (data: any) => {
    const response = await appAxios.post('/initiateCouponSwap', data);
    return response.data;
}