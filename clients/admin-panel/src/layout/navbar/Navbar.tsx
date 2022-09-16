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
        <img
          src='https://images.squarespace-cdn.com/content/v1/59ea6080a803bb2f70ecbae5/1545587567641-ZWHZLLT6TEFLHGZZINON/3ea3f2a0fd.c40c11dd0a.MhId2s.png?format=500w'
          alt='logo-pic'
        />
        <h2>WS ADMIN</h2>
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
