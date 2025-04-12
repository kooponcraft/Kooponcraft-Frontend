import appAxios from "@/config/axios";

export async function acceptRedeemRequest(requestId: any) {
    const response = await appAxios.delete(`/acceptRedeemRequest/${requestId}`);
    return response.data;
}