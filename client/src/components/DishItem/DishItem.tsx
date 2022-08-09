import './DishItem.css'

const DishItem = () => {
  return (
    <div className="dishItem">
      <div className="dishItem-image">
        <img
          src="https://cdn.dodostatic.net/static/Img/Products/5630c6ed3f394c7ba25e1ef79a67b7ee_292x292.jpeg"
          alt="pizza"
        />
      </div>
      <div className="dishItem-about">
        <div className="dishItem-about__name">
          <p style={{ fontSize: '20px' }}>Ham & Cheese</p>
          <p style={{ fontSize: '12px', color: '#5C6370' }}>
            Ham, Mozzarella, Alfredo sauce
          </p>
        </div>
      </div>
      <div className="dishItem-about__info">
        <p className="dishItem-about__info-price">10 $</p>
        <button>Choose</button>
      </div>
    </div>
  )
}

export default DishItem
