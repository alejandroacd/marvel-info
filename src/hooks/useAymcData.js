import { useEffect, useState } from "react";

const useAsyncData = (fetchFunction) => {
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
                setData(result?.data?.data?.results)
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
            abortController.abort()
        }
    }, [])

    return { data, loading, error }
}

export default useAsyncData