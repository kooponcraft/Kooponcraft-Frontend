import appAxios from "@/config/axios";

export const mintToken = async (url: string, formData: any) => {
    const response = await appAxios.post(url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data
}