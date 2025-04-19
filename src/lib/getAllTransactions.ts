"use server"

import appAxios from "@/config/axios";
import { cookies } from "next/headers";

export async function getAllTransactions() {
    try {
        const response = await appAxios.get('/buyerPurchases', {
            headers: {
                "Authorization": `Bearer ${(await cookies()).get('token')?.value}`
            }
        });
        return response.data?.purchases || [];
    } catch (error) {
        console.error('Error fetching transactions:', error);
        return []
    }
}