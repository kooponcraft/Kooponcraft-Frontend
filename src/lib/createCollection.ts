import appAxios from "@/config/axios";

export const createCollection = async (formData: any) => {
    const response = await appAxios.post('/createCollection', {
        name: formData.name,
        description: formData.description,
        tokenPrefix: formData.tokenPrefix,
        collectionImageUrl: formData.collectionImageUrl
      });
      return response.data;
}