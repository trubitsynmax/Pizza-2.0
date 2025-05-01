import "../components/css/basket.scss";
import Trash from "../assets/image/Tash";
import basket from "../assets/image/basket-black.svg";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { clearBasket } from "../redux/items/sliceItems";
import { Link } from "react-router-dom";
import { Empty } from "../components/basket/index";
import { Basket } from "../components/basket/index";
import { setItemsLS } from "../components/utils"; //!utils function set items in local storage

const BasktetPage: React.FC = () => {
  const items = useAppSelector((state) => state.items.items);
  const totalCount = useAppSelector((state) => state.items.count);
  const totalPrice = useAppSelector((state) => state.items.totalPrice);
  const dispatch = useAppDispatch();

  setItemsLS(items);
  const clearItems = (): void => {
    dispatch(clearBasket());
  };
  return items.length > 0 ? (
    <div className="basket">
      <div className="container">
        <div className="basket__items basket__items_header">
          <div className="basket__item">
            <img
              src={basket}
              alt="Корзина"
              className="basket__picture basket__picture_big"
            />
            <div className="basket__title">Корзина</div>
          </div>
          <div className="basket__clear">
            <div className="basket__clear-body" onClick={clearItems}>
              <Trash className="basket__picture basket__picture_small" />
              <div className="basket__text-clear">Очистить корзину</div>
            </div>
          </div>
        </div>
        {items.map((item, idx) => (
          <Basket {...item} key={idx} />
        ))}
        <div className="basket__items">
          <div className="basket__all-count">
            Всего пицц: <span>{totalCount} шт.</span>
          </div>
          <div className="basket__all-price">
            Сумма заказа: <span>{totalPrice}₽</span>
          </div>
        </div>
        <div className="basket__block">
          <Link to="/" className="basket__back">
            <span></span>
            Вернуться назад
          </Link>
          <button className="basket__payment">Оплатить сейчас</button>
        </div>
      </div>
    </div>
  ) : (
    <Empty />
  );
};
export default BasktetPage;
