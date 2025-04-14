import appAxios from "@/config/axios";

export const createCollection = async (formData: any) => {
    const response = await appAxios.post('/createCollection', formData);
    return response.data;
}