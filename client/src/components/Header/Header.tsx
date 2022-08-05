import "./Header.css";
import Icon from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content w-1360">
        <div className="header-content__logo">
          <img src={Icon} alt="logo" />
          <div className="header-content__logo-text">
            <h2>Pizza Kyiv</h2>
          </div>
        </div>
        <div className="header-content__list">
          <ul>
            <li>Pizza</li>
            <li>Combo</li>
            <li>Snacks</li>
            <li>Drinks</li>
            <li>Deserts</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
