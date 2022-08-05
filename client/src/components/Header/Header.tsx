import "./Header.css";
import Icon from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content w-1560">
        <div className="header-content__logo">
          <img src={Icon} alt="logo" />
          <div className="header-content__logo-text">
            <h2>Pizza App</h2>
          </div>
        </div>
        <div className="header-content__list">
          <ul>
            <li>
              <a href="#">Pizza</a>
            </li>
            <li>
              <a href="#">Combo</a>
            </li>
            <li>
              <a href="#">Snacks</a>
            </li>
            <li>
              <a href="#">Drinks</a>
            </li>
            <li>
              <a href="#">Deserts</a>
            </li>
          </ul>
        </div>
        <div className="header-content__cart">
          <button>Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
