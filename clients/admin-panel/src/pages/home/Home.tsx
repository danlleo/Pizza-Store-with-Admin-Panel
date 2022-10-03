import Table from '../../components/table/Table'
import Navbar from '../../layout/navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDollar,
  faBars,
  faSheetPlastic,
  faBellConcierge
} from '@fortawesome/free-solid-svg-icons'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='home__body'>
        <input type='text' placeholder='Search item..' />
        <div className='home__body__blocks'>
          <div className='home__body__blocks__item'>
            <p>Total items</p>
            <FontAwesomeIcon
              icon={faBars}
              style={{
                color: '#82B6F2'
              }}
            />
            <h1>40,876</h1>
          </div>
          <div className='home__body__blocks__item'>
            <p>Total categories</p>
            <FontAwesomeIcon
              icon={faSheetPlastic}
              style={{
                color: '#39C586'
              }}
            />
            <h1>40,876</h1>
          </div>
          <div className='home__body__blocks__item'>
            <p>Total orderds</p>
            <FontAwesomeIcon
              icon={faBellConcierge}
              style={{
                color: '#FCC372'
              }}
            />
            <h1>40,876</h1>
          </div>
          <div className='home__body__blocks__item'>
            <p>Total revenue</p>
            <FontAwesomeIcon
              icon={faDollar}
              style={{
                color: '#E0858A'
              }}
            />
            <h1>40,876</h1>
          </div>
        </div>
        <h1 style={{ margin: '2.5rem 0 1rem' }}>Recent Orders</h1>
        <Table />
      </div>
    </div>
  )
}

export default Home
