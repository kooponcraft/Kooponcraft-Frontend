import appAxios from "@/config/axios";

export const purchaseItem = async (data: any) => {
    const response = await appAxios.post('/purchaseItem', data);
    return response.data
}