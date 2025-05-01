import React from "react";
import logo from "../../assets/image/pizza-logo.svg";
import { Link } from "react-router-dom";

export const Logo: React.FC = React.memo(() => {
  return (
    <Link to="/" className="header__link">
      <img
        src={logo}
        alt="Картинка где-то потерялась"
        className="header__logo"
      ></img>
      <p>
        <span>React Pizza V2</span> <br /> самая вкусная пицца во вселенной
      </p>
    </Link>
  );
});
