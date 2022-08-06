import "./DishItem.css";

const DishItem = () => {
  return (
    <div className="dishItem">
      <div className="dishItem-image">
        <img
          src="https://assets.dots.live/misteram-public/ca9178c1bce556857ad5dc6128fc2a5c-826x0.png"
          alt="pizza"
        />
      </div>
      <div className="dishItem-about">
        <div className="dishItem-about__name">
          <p>Маргаріта, розмір L</p>
        </div>
        <div className="dishItem-about__info">
          <p className="dishItem-about__info-price">175 ₴</p>
          <p>500 G</p>
        </div>
      </div>
    </div>
  );
};

export default DishItem;
