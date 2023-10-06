import React from "react";
import logoSvg from "../images/svg/header_logo.svg";
import logoShop from "../images/svg/shop.svg";
import logoLike from "../images/svg/like.svg";
import logoAccount from "../images/svg/account.svg";
import { Link } from "react-router-dom";
import "../App.css"

const Header = () => {
  return (
    <div className="wrap">
      <header className="header__section">
        <div className="container header_container">
          <div className="header__content">
            <div className="header__logo">
              <Link to={"/"}>
                <img src={logoSvg} alt="logo" className="header__logo_svg" />
              </Link>
              <div className="header__logo_titles">
                <h3 className="header__logo_sub-title">REACT SNEAKERS</h3>
                <p className="header__logo_sup-title">
                  Магазин найкращих кросівок
                </p>
              </div>
            </div>
            <div className="header__shop">
              <ul className="header__shop list">
                <li className="shop-wrap">
                  <img
                    src={logoShop}
                    alt="logo"
                    className="header__logo_svg icon"
                  />
                  <p className="shop-text">1205$</p>
                </li>
                <li>
                  <Link to={"/favourites"}>
                    <img
                      src={logoLike}
                      alt="logo"
                      className="header__logo_svg icon"
                    />
                  </Link>
                </li>
                <li>
                  <img
                    src={logoAccount}
                    alt="logo"
                    className="header__logo_svg icon"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
