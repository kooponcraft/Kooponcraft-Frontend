"use server"

import appAxios from "@/config/axios"
import { cookies } from "next/headers"

export const getItemDetails = async (type: "item" | "coupon", collectionId: string, tokenId: string) => {
    try{
        const pathname = `/${type == "item" ? "getItem" : "getCoupon"}/${collectionId}/${tokenId}`
        const { data } = await appAxios(pathname, {
            headers: {
                "Authorization": `Bearer ${(await cookies()).get("token")?.value}`
            }
        })
        return data
    }catch(err: any){
        console.log("Error getting items", err)
        return err.response.data || { success: false, error: err.message || "Error getting items" }
    }
}