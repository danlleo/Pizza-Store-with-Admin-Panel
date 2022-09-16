import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import {
  faChartBar,
  faClone,
  faBell,
  faCompass
} from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <h2>ADMIN PANEL</h2>
      </div>
      <div className='navbar__links'>
        <Link to='/'>
          <FontAwesomeIcon icon={faClone} />
          <p>Dashboard</p>
        </Link>
        <Link to='/products'>
          <FontAwesomeIcon icon={faBell} />
          <p>Products</p>
        </Link>
        <Link to='/categories'>
          <FontAwesomeIcon icon={faChartBar} />
          <p>Categories</p>
        </Link>
        <Link to='/'>
          <FontAwesomeIcon icon={faCompass} />
          <p>About</p>
        </Link>
      </div>
      <div className='navbar__logout'>
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        <p>Log out</p>
      </div>
    </div>
  )
}

export default Navbar
