import "./Header.css";
import Icon from "../../assets/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content w-1360">
        <div className="header-content__logo-text">
          <img src={Icon} alt="logo" />
          <div>
            <h2>Pizza Kyiv</h2>
            <p>№1 Pizza App in Ukraine</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
