"use server"

import appAxios from '@/config/axios';
import { cookies } from 'next/headers';

export async function getUser(): Promise<User | null> {
    const token = (await cookies()).get("token")?.value;

    try {
        const response = await appAxios.get(`/getUser`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.user;
    } catch (error: unknown) {
        // console.error('Error fetching user:', error);
        return null;
    }
}