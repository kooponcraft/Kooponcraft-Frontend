import appAxios from "@/config/axios";

export async function acceptCouponSwap(offerId: string) {
    const response = await appAxios.post('/acceptCouponSwap', {
        swapOfferId: offerId,
    });
    return response.data;
}