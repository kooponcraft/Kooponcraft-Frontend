import appAxios from "@/config/axios";

export const getUserTokens = async () => {
    try{
        const response = await appAxios.get('/getUserToken');
        return response.data.allTokens;
    }catch(error){
        console.error('Error fetching user tokens:', error);
        return [];
    }
}