import { useEffect, useState } from "react";
import { getComic } from "../../services/leagues";
import useAsyncData from "../../hooks/useAymcData";
import { useParams } from "react-router-dom";
import Details from "../../components/details/Details";

const Comic = () => {
    const { id } = useParams()
    const { data, loading, error } = useAsyncData(() => getComic(id))
    const [comic, setComic] = useState([])
    useEffect(() => {
        if (data) {
            setComic(data[0])
        }
    }, [data])

    return (
        <>
        <Details detail={comic} />
        </>
    )
}

export default Comic