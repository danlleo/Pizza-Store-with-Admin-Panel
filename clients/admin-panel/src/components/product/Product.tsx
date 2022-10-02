import { SyncLoader } from 'react-spinners'
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
  const [removeStoreItem, { isLoading, isSuccess }] =
    useRemoveStoreItemMutation()

  const removeFromStore = (name: string) => {
    removeStoreItem(id)
  }

  let content

  if (isLoading || isSuccess) {
    content = <SyncLoader size='10px' color='var(--main-accent-color)' />
  } else {
    content = (
      <button onClick={() => removeFromStore(name)}>
        <FontAwesomeIcon icon={faXmark} />
      </button>
    )
  }

  return (
    <div className='product'>
      <div className='product__container'>
        <img
          src={`https://pizza-store.s3.eu-central-1.amazonaws.com/${image}`}
          alt='dish'
        />
        <div className='product__container__about'>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className='product__btn__container'>
        {content}
        <button>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </div>
    </div>
  )
}

export default Product
