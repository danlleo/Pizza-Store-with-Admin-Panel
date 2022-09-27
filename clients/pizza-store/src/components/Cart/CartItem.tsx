import { useAppDispatch } from '../../store'
import {
  increase,
  decrease,
  removeFromCart
} from '../../store/features/cartListSlice'
import './CartItem.css'

interface ICartItem {
  title: string
  description: string
  image: string
  price: number
  amount: number
  id: number
}

const CartItem = ({
  image,
  title,
  description,
  price,
  amount,
  id
}: ICartItem) => {
  const dispatch = useAppDispatch()

  const handleDecrease = () => {
    if (amount === 1) {
      dispatch(removeFromCart(id))
      return
    }

    dispatch(decrease({ id }))
  }

  const handleIncrease = () => {
    dispatch(increase({ id }))
  }

  return (
    <div className='cartItem'>
      <div className='cartItem__header'>
        <img
          src='https://cdn.dodostatic.net/static/Img/Products/5630c6ed3f394c7ba25e1ef79a67b7ee_292x292.jpeg'
          alt='ham and cheese'
        />
        <div className='cartItem__description'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <button onClick={() => dispatch(removeFromCart(id))}>
          <svg fill='none' viewBox='0 0 24 24'>
            <path
              d='M17.3 5.3a1 1 0 111.4 1.4L13.42 12l5.3 5.3a1 1 0 11-1.42 1.4L12 13.42l-5.3 5.3a1 1 0 01-1.4-1.42l5.28-5.3-5.3-5.3A1 1 0 016.7 5.3l5.3 5.28 5.3-5.3z'
              fill='#000'
            ></path>
          </svg>
        </button>
      </div>
      <div className='cartItem__footer'>
        <h3>{price} $</h3>
        <div className='cartItem__footer__counter'>
          <button onClick={() => handleDecrease()}>-</button>
          <div>
            <p>{amount}</p>
          </div>
          <button onClick={() => handleIncrease()}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
