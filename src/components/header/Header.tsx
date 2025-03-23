import "../style.css";
import React from "react";
import logo from "../../assets/image/pizza-logo.svg";
import basket from "../../assets/image/basket.svg";
import { Link } from "react-router-dom";
import { selectInput } from "../../redux/InputSort/sortSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import debounce from "lodash.debounce";
const Header = () => {
  const [valueInput, setValueInput] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const countPizza = useAppSelector((state) => state.items.count);
  const pricePizza = useAppSelector((state) => state.items.totalPrice);
  const dispatch = useAppDispatch();
  const changeInput = () => {
    setValueInput("");
    getValueInput("");
    inputRef.current?.focus();
  };
  const getValueInput = React.useCallback(
    debounce((str: string) => {
      dispatch(selectInput(str));
    }, 500),
    []
  );
  const eventInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value);
    getValueInput(event.target.value);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__column header__column_col1">
            <Link to="/" className="header__body">
              <img
                src={logo}
                alt="Картинка где-то потерялась"
                className="header__logo"
              ></img>
              <p>
                <span>React Pizza V2</span> <br /> самая вкусная пицца во
                вселенной
              </p>
            </Link>
          </div>
          <div className="header__column header__column_col2">
            <input
              ref={inputRef}
              value={valueInput}
              onChange={eventInput}
              type="text"
              className="header__input"
              placeholder="Поиск пиццы"
              maxLength={35}
            />
            {valueInput && <span onClick={changeInput}></span>}
          </div>
          <div className="header__column header__column_col3">
            <button className="header__button">
              <div className="header__sum">{pricePizza} ₽</div>
              <div className="header__count">
                <img
                  src={basket}
                  alt="Картинка где-то потерялась"
                  className="header__basket"
                />
                <span>{countPizza}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
