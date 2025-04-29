import "../style.css";
import { useLocation } from "react-router-dom";
import { Input } from "./Input";
import { Logo } from "./Logo";
import { BasketLink } from "./BasketLink";
import React from "react";
const Header = () => {
  const url = useLocation().pathname;

  return (
    <div className="header">
      <div className="container">
        {url == "/" ? (
          <div className="header__row">
            <div className="header__column">
              <Logo />
            </div>
            <div className="header__column header__column_col2">
              <Input />
            </div>
            <div className="header__column header__column_col3">
              <BasketLink />
            </div>
          </div>
        ) : (
          <div className="header__wrapper">
            <Logo />
          </div>
        )}
      </div>
    </div>
  );
};
export default React.memo(Header);
