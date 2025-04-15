"use server"

import appAxios from "@/config/axios";
import { cookies } from "next/headers";

export const getStores = async () => {
    try {
        const response = await appAxios.get('/getStores', {
            headers: {
                "Authorization": `Bearer ${(await cookies()).get("token")?.value}`
            }
        });
        return response.data.stores;
    } catch (error) {
        console.error('Error fetching stores:', error);
        return [];
    }
};