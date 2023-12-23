import { axiosConfig } from "../../configs/axios/axiosConfig"
export const getComics = async () => {
    const abortController = new AbortController()
    const response = await axiosConfig.get('v1/public/comics', { signal: abortController.signal})
    return response
}

export const getComic = async (id) => {
    const abortController = new AbortController()
    const response = await axiosConfig.get(`v1/public/comics/${id}`, { signal: abortController.signal})
    return response
}