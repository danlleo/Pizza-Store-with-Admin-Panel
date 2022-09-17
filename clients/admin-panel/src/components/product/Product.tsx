import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = () => {
  return (
    <div className='product'>
      <div className='product__container'>
        <img
          src='https://pizza-store.s3.eu-central-1.amazonaws.com/632587ee7751114cd5ea28b3.png'
          alt='dish'
        />
        <div className='product__container__about'>
          <h1>Pepperoni</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non
            urna imperdiet, sollicitudin velit sit amet, laoreet leo.
          </p>
        </div>
      </div>
      <div className='product__btn__container'>
        <button>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <button>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </div>
    </div>
  )
}

export default Product
