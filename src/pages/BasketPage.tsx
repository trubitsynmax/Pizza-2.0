import "../components/css/basket.scss";
import basket from "../assets/image/basket-black.svg";
import Trash from "../assets/image/Tash";

const BasktetPage = () => {
  return (
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
            <Trash className={"basket__picture basket__picture_small"} />
            <div className="basket__text-clear">Очистить корзину</div>
          </div>
        </div>
        <div className="basket__wrapper">
          <img src="123" alt="" className="basket__image" />
          <div className="basket__body">
            <div className="basket__sub-title">Кисло-сладкий цыпленок</div>
            <div className="basket__label">тонкое, 26 см.</div>
          </div>
          <div className="basket__row">
            <button className="basket__minus"></button>
            <div className="basket__count">2</div>
            <button className="basket__plus"></button>
          </div>
          <div className="basket__price">0 ₽</div>
          <button className="basket__delete"></button>
        </div>
        <div className="basket__items">
          <div className="basket__all-count">
            Всего пицц: <span>2 шт.</span>
          </div>
          <div className="basket__all-price">
            Сумма заказа: <span>408₽</span>
          </div>
        </div>
        <div className="basket__block">
          <button className="basket__back">
            <span></span>
            Вернуться назад
          </button>
          <button className="basket__payment">Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
};
export default BasktetPage;
