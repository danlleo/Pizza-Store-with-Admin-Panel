import './CartItem.css'

const CartItem = () => {
  return (
    <div className='cartItem'>
      <div className='cartItem__header'>
        <img
          src='https://cdn.dodostatic.net/static/Img/Products/5630c6ed3f394c7ba25e1ef79a67b7ee_292x292.jpeg'
          alt='ham and cheese'
        />
        <div className='cartItem__description'>
          <h3>Ham & Cheese</h3>
          <p>Ham, Mozzarella, Alfredo sauce</p>
        </div>
      </div>
      <div className='cartItem__footer'>
        <h3>10 $</h3>
        <div className='cartItem__footer__counter'>
          <button>-</button>
          <div>
            <p>1</p>
          </div>
          <button>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
