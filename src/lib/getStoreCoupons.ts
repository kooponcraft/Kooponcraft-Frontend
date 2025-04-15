import appAxios from "@/config/axios";

export const getStoreCoupons = async (accountAddress: string) => {
    try{
        const response = await appAxios.get(`/getStoreCoupons/${accountAddress}`);
        return response.data.coupons
    }catch(err){
        console.log("Error getting Store Coupons", err)
        return []
    }
}