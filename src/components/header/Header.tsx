import React from "react";
import logo from "../../assets/image/pizza-logo.svg";
import basket from "../../assets/image/basket.svg";
import "../style.css";

export default function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__column header__column_col1">
            <div className="header__body">
              <img
                src={logo}
                alt="Картинка где-то потерялась"
                className="header__logo"
              ></img>
              <p>
                <span>React Pizza V2</span> <br /> самая вкусная пицца во
                вселенной
              </p>
            </div>
          </div>
          <div className="header__column header__column_col2">
            <input
              type="text"
              className="header__input"
              placeholder="Поиск пиццы"
              maxLength={35}
            />
            <span></span>
          </div>
          <div className="header__column header__column_col3">
            <button className="header__button">
              <div className="header__sum">0 ₽</div>
              <div className="head__count">
                <img
                  src={basket}
                  alt="Картинка где-то потерялась"
                  className="header__basket"
                />
                <span>0</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
