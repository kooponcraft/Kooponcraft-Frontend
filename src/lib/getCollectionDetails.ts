"use server"

import appAxios from "@/config/axios"
import { cookies } from "next/headers"

export const getCollectionDetails = async (collectionId: string) => {
    try{
        const { data } = await appAxios(`/collection/${collectionId}`, {
            headers: {
                "Authorization": `Bearer ${(await cookies()).get("token")?.value}`,
            }
        })
        return data.collection
    }catch(err: any){
        console.log("Error getting collection: ", err)
        return err.response.data || { success: false, error: err.message || "Error getting collection" }
    }
}