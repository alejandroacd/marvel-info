import { axiosConfig } from "../../configs/axios/axiosConfig"
export const getLeagues = async () => {
    const abortController = new AbortController()
    const response = await axiosConfig.get('v1/public/comics', { signal: abortController.signal})
    return response
}