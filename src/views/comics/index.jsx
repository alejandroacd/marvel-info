import './styles.scss'
import Card from '../../components/cards/Card'
const Comics = () => {
    return (
        <>
         <h1 className='comics_title'> / Comics</h1>
        <div className='comics_container'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

         </div>
        </>
    )
}

export default Comics