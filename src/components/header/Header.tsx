import "../style.css"; //!css
import React from "react"; //!react component
import logo from "../../assets/image/pizza-logo.svg"; //!logo svg
import basket from "../../assets/image/basket.svg"; //!basket svg
import { Link, useLocation } from "react-router-dom"; //!react router component
import { selectInput } from "../../redux/sortItems/sliceSort"; //!slice input
import { useAppDispatch, useAppSelector } from "../../redux/store"; //!redux dispatch/selector
import debounce from "lodash.debounce"; //!debounce

const Header = () => {
  const [valueInput, setValueInput] = React.useState("");
  const url = useLocation();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const amountPizzas = useAppSelector((state) => state.items.count);
  const pricePizzas = useAppSelector((state) => state.items.totalPrice);
  const dispatch = useAppDispatch();
  const clearInput = () => {
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
  const getUsersValueInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueInput(event.target.value);
    getValueInput(event.target.value);
  };
  return (
    <div className="header">
      <div className="container">
        {url.pathname == "/" ? (
          <div className="header__row">
            <div className="header__column">
              <Link to="/" className="header__link">
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
                onChange={getUsersValueInput}
                type="text"
                className="header__input"
                placeholder="Поиск пиццы"
                maxLength={35}
              />
              {valueInput && <span onClick={clearInput}></span>}
            </div>
            <div className="header__column header__column_col3">
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
            </div>
          </div>
        ) : (
          <div className="header__wrapper">
            <Link to="/" className="header__link">
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
        )}
      </div>
    </div>
  );
};
export default Header;
