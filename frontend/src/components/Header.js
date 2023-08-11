import React from "react";
import { Link, useLocation } from "react-router-dom";
import headerLogo from "../images/logo-mesto.svg";

function Header(props) {
  const location = useLocation();
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="Логотип" />
      {props.isLoggedIn ? (
        <div className="header__container">
          <p className="header__email">{props.email}</p>
          <Link
            className="header__link header__link_disabled"
            onClick={props.onSignOut}
            to="/sign-in"
          >
            Выйти
          </Link>
        </div>
      ) : null}
      {location.pathname == "/sign-in" ? (
        <>
          <Link className="header__link" to="/sign-up">
            Регистрация
          </Link>
        </>
      ) : null}
      {location.pathname == "/sign-up" ? (
        <>
          <Link className="header__link" to="/sign-in">
            Войти
          </Link>
        </>
      ) : null}
    </header>
  );
}

export default Header;
