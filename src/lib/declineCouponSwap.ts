import appAxios from "@/config/axios";

export async function declineCouponSwap(offerId: string) {
    const response = await appAxios.post('/declineCouponSwap', {
        offerId,
    });
    return response.data;
}