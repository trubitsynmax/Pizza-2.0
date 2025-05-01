import React from "react";
import { Link } from "react-router-dom";
import basket from "../../assets/image/basket.svg";
import { useAppSelector } from "../../redux/store";

export const BasketLink: React.FC = React.memo(() => {
  const amountPizzas = useAppSelector((state) => state.items.count);
  const pricePizzas = useAppSelector((state) => state.items.totalPrice);
  return (
    <Link to="basket" className="header__button">
      <div className="header__sum">{pricePizzas} ₽</div>
      <div className="header__count">
        <img
          src={basket}
          alt="Картинка где-то потерялась"
          className="header__basket"
        />
        <span>{amountPizzas}</span>
      </div>
    </Link>
  );
});
