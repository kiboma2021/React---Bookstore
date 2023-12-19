
import {Link, NavLink} from 'react-router-dom'
import styles from './Header.module.css'
import Logo from '../assets/logo.jpg'

const Header = ({books}) => {
  return (
    <section className={styles.header}>
        <Link to='/' className={styles.home}>
            <img className={styles.logo} src={Logo} alt="" />
            <p>Imara Bookshop</p>
        </Link>
        <nav className='nav-bar'>
          <NavLink to='/'>All Books ({books.length}) </NavLink>
          <NavLink to='/contact'>Contact Us </NavLink>
          <NavLink to='/profile'>Profile</NavLink>
        </nav>

        
      
    </section>
  )
}

export default Header
