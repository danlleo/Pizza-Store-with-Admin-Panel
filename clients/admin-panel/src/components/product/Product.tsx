import { MoonLoader } from 'react-spinners'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useRemoveStoreItemMutation } from '../../api/apiSlice'
import './Product.css'

interface IProduct {
  image: string
  name: string
  description: string
  id: string | undefined
}

const Product = ({ image, name, description, id }: IProduct) => {
  const [removeStoreItem, { isLoading }] = useRemoveStoreItemMutation()

  const removeFromStore = (name: string) => {
    removeStoreItem(id)
  }

  return (
    <div className='product'>
      <div className='product__container'>
        <img src={image} alt='dish' />
        <div className='product__container__about'>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className='product__btn__container'>
        {!isLoading ? (
          <button>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => removeFromStore(name)}
            />
          </button>
        ) : (
          <MoonLoader
            style={{ width: '25px', color: 'var(--main-font-color)' }}
          />
        )}
        <button>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </div>
    </div>
  )
}

export default Product
