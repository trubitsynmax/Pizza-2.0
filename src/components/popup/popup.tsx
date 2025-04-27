import { addItem, closePopup, removeItem } from "../../redux/items/sliceItems"; //!slice add items, close popup & remove items
import { useAppDispatch, useAppSelector } from "../../redux/store"; //!redux selector/dispatch
import { TPlusItem } from "../types/types"; //!type
import "../style.css"; //!css
import React from "react"; //!react components

const Popup: React.FC<TPlusItem> = ({
  id,
  name,
  imageUrl,
  getSizes,
  price,
  typesPizza,
  count,
}) => {
  const dispatch = useAppDispatch();
  const changeItem = useAppSelector((state) => state.items.changeItem);

  const onClosePopup = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target == e.currentTarget) {
      dispatch(closePopup());
    }
  };

  React.useEffect(() => {
    if (changeItem?.id) {
      document.body.classList.add("close");
    } else {
      document.body.classList.remove("close");
    }

    return () => {
      document.body.classList.remove("close");
    };
  }, [changeItem?.id]);

  const addSelectPizza = () => {
    dispatch(
      addItem({ id, imageUrl, name, typesPizza, getSizes, price, count })
    );
  };
  const removeSelectPizza = () => {
    dispatch(removeItem({ id, getSizes: getSizes, typesPizza, count }));
  };
  return (
    <>
      {changeItem?.id && (
        <div className="popup" onClick={onClosePopup}>
          <div className="popup__container">
            <div className="popup__row">
              <span onClick={onClosePopup}></span>
              <div className="popup__column popup__column_col1">
                <div className="popup__image">
                  <img src={imageUrl} alt="Пицца где-то потерялась 😔" />
                </div>
              </div>
              <ul className="popup__column">
                <li className="popup__text">
                  Калорийность: {changeItem.info?.caloric} ккал
                </li>
                <li className="popup__text">
                  Белки: {changeItem.info?.proteins} г
                </li>
                <li className="popup__text">Жиры: {changeItem.info?.fats} г</li>
                <li className="popup__text">
                  Углеводы: {changeItem.info?.carbohyd} г
                </li>
                <li className="popup__text">
                  Пищевые волокна: {changeItem.info?.fiber} г
                </li>
                <li className="popup__text">
                  Вода: {changeItem.info?.water} г
                </li>
              </ul>
            </div>
            <div className="popup__items">
              <button
                className="popup__button-remove"
                onClick={() => removeSelectPizza()}
              >
                Удалить
              </button>
              <button
                className="popup__button-add"
                onClick={() => addSelectPizza()}
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
