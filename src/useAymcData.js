import { useEffect, useState } from "react";

const useAsyncData = (fetchFunction, character) => {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        const fetchData = async () => {
            setLoading(true)
            try {
                const result = await fetchFunction(signal)
                setData({
                    name: result?.name,
                    status: result?.status,
                    gender: result?.gender,
                    image: result?.image,
                    species: result?.species
                })
            } catch (error) {
                if (!signal.aborted) {
                    setError(error)
                    setLoading(false)
                }
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()

        return () => {
            console.log('abortado')
            abortController.abort()
        }
    }, [character])

    return { data, loading, error }
}

export default useAsyncData