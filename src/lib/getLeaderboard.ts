import appAxios from "@/config/axios";

export const getLeaderboard = async (params: any) => {
    try{
        const response = await appAxios.get(`/getLeaderboard`, { params });
        return response.data
    }catch(err){
        console.log("Error fetching leaderboard:", err)
        return err
    }
}