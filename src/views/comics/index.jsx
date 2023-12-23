import './styles.scss'
import { useEffect, useState } from 'react'
import Card from '../../components/cards/Card'
import useAsyncData from '../../hooks/useAymcData'
import { getComics } from '../../services/leagues/index'
const Comics = () => {
    const { data, loading, error } = useAsyncData(getComics)
    const [comics, setComics] = useState([])
    useEffect(() => {
        setComics(data)
        console.log(data)
    }, [data])
    return (
        <>
         <h1 className='comics_title'> / Comics</h1>
        <div className='comics_container'>
            {comics?.map((comic, index) => (
                <Card key={index} comic={comic} />
            ))}

         </div>
        </>
    )
}

export default Comics