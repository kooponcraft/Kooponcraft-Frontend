import appAxios from "@/config/axios";

export const createItem = async (formData: any) => {
    const response = await appAxios.post('/createItem', formData);
    return response.data;
}