import appAxios from "@/config/axios";

export async function getCollections() {
    try {
        const response = await appAxios.get('/getCollections');
        return response.data.collections;
    } catch (error) {
        console.error('Error fetching collections:', error);
        return []
    }
}