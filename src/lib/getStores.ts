import appAxios from "@/config/axios";

export const getStores = async () => {
    try {
        const response = await appAxios.get('/getStores');
        return response.data.stores;
    } catch (error) {
        console.error('Error fetching stores:', error);
        return [];
    }
};