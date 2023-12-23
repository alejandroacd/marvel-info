import './index.scss'
import { Link } from 'react-router-dom'
const Card = ({comic}) => {
    return (
        <div className="simple_card">
            <h1>{comic?.title}</h1>
            <img src={`${comic?.thumbnail?.path}.${comic?.thumbnail?.extension}`} alt={comic?.title}/>
            <p>{comic?.description}</p>
            <Link to={`/comics/${comic?.id}`} className="button-48" role="button"><span className="text">View info</span></Link>
        </div>
    )
}

export default Card