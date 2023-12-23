import './styles.scss'
import { useEffect, useState } from 'react'
import Slider from '../slider/Slider'
const Details = ({detail}) => {

    return (
        <>
        <div className='details_container'>
            <h1>
                {detail?.title}
            </h1>
            <img alt="Imágen del comic" loading="lazy" src={`${detail?.thumbnail?.path}.${detail?.thumbnail?.extension}`} />
          
          {detail?.prices?.length > 0 && detail?.prices[0]?.price > 0 && 
          <div>
            <h2 className='details_subtitle'>
                Price:
            </h2>
            <p className='details_description'> {detail?.prices[0]?.price} $</p>

          </div>}
          {detail?.creators?.items?.length > 0 && <div>
            <h2 className='details_subtitle'> Creators: </h2>
          {detail?.creators?.items?.map((creator, index) => (
            <div key={index}>
                <p className='details_description'> {creator?.name}, <b>{creator?.role} </b> </p>

            </div>
          ))}    
         </div>}

         
            
        </div>
        </>
    )
}

export default Details