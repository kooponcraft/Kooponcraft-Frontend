// "use server"

import appAxios from '@/config/axios';
import { redirect } from 'next/navigation';

export async function logout(): Promise<void> {
    try {
        await appAxios.post('/logout');
        if(typeof window === "undefined"){
            redirect("/login")
        }
        location.assign("/login")
    } catch (error) {
        console.error('An error occurred during logout', error);
    }
}