<<<<<<< HEAD
import Icon from "../../assets/logo.svg"
import { Link } from "react-router-dom"
import "./Header.css"
=======
import Icon from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import './Header.css'
>>>>>>> 4f40845c6499c61f67e9f42aafe2bd3be62ee510

const Header = () => {
  return (
    <div className='header'>
      <div className='header-content clap-width'>
        <div className='header-content__logo'>
          <Link
<<<<<<< HEAD
            to='/'
            style={{ display: "flex", alignItems: "center", color: "#000" }}
=======
            to="/"
            style={{ display: 'flex', alignItems: 'center', color: '#000' }}
>>>>>>> 4f40845c6499c61f67e9f42aafe2bd3be62ee510
          >
            <img src={Icon} alt='logo' />
            <div className='header-content__logo-text'>
              <h2>Pizza App</h2>
            </div>
          </Link>
        </div>
        <div className='header-content__list'>
          <ul>
            <li>
              <a href='#pizza'>Pizza</a>
            </li>
            <li>
              <a href='#combo'>Combo</a>
            </li>
            <li>
              <a href='#snacks'>Snacks</a>
            </li>
            <li>
              <a href='#drinks'>Drinks</a>
            </li>
            <li>
              <a href='#desserts'>Desserts</a>
            </li>
          </ul>
        </div>
        <div className='header-content__cart'>
          <button>Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Header
