import styles from './Header.module.css'
import Logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <section className={styles.header}>
        <div className={styles.home}>
            <img className={styles.logo} src={Logo} alt="" />
            <p>Home</p>
        </div>

        <p>Login</p>
      
    </section>
  )
}

export default Header
