import styles from '../styles/Navbar.module.css';
import logo from '../assets/AppImages/logo.png';
import { Link } from 'react-router-dom';
function Navbar(){
    return(
        <>
            <nav className={styles.nav}>
                <img src={logo} alt='logo' className={styles.logo}/>
                <ul className={styles.navLinks}>
                    <li><Link to="/" className="h1">Mission</Link></li>
                    <li><Link to="/totm" className="h1">Featured Tea</Link></li>
                    <li><Link to="/locations" className="h1">Featured Tea</Link></li>
                </ul>
            </nav>
        </>
    );
}
export default Navbar;