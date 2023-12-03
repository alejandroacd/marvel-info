import Title from  './components/Title.jsx'
import Menu from './components/Menu.jsx'
import './styles.scss'
const Header = () => {

    return (
        <header className='header'>
            <Title />
            <Menu />
        </header>
    )
}

export default Header