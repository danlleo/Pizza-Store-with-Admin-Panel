import CartItem from './CartItem'
import CartEmptySvg from '../../assets/undraw_empty_cart.svg'
import { close } from '../../store/features/cartSlice'
import { useAppSelector, useAppDispatch } from '../../store'
import './Cart.css'

const Cart = () => {
  const dispatch = useAppDispatch()
  const cartList = useAppSelector((state) => state.cartList.entities)
  const totalPrice = useAppSelector((state) => state.cartList.price)

  return (
    <div style={{ zIndex: '1000', position: 'relative' }}>
      <div className='cart'>
        <div
          className='cart__background'
          onClick={() => dispatch(close())}
        ></div>
        <div className='cart__container'>
          <button className='cart__container-close'>
            <svg
              viewBox='0 0 24 24'
              fill='none'
              onClick={() => dispatch(close())}
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9.61 12.199L.54 3.129A1.833 1.833 0 113.13.536l9.07 9.07L21.27.54a1.833 1.833 0 012.592 2.592l-9.068 9.068 9.07 9.07a1.833 1.833 0 01-2.59 2.592l-9.072-9.07-9.073 9.073a1.833 1.833 0 01-2.591-2.592L9.61 12.2z'
                fill='#fff'
              ></path>
            </svg>
          </button>

          <div className='cart__container-items'>
            {cartList.length ? (
              cartList.map((item) => (
                <CartItem
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  amount={item.quantity}
                  description={item.description}
                  id={item.id}
                  key={item.title}
                />
              ))
            ) : (
              <>
                <img
                  src={CartEmptySvg}
                  alt='Empty card'
                  style={{ width: '350px', marginTop: '1rem' }}
                />
                <h1 style={{ marginTop: '1rem' }}>Cart is empty</h1>
              </>
            )}
          </div>
          <div className='cart__container__total'>
            <div className='cart__container__total-price'>
              <p>Total Price</p>
              <p>{totalPrice} $</p>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
