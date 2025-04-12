import appAxios from "@/config/axios";

export const getStoreItems = async () => {
    try {
        const response = await appAxios.get('/getStoreItems');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching store items:', error);
        return error
    }
}