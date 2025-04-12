import appAxios from "@/config/axios";

export const mintItem = async (formData: any) => {
    const response = await appAxios.post("/mintToken", formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data
}