import {
  addItem,
  closePopup,
  changeItem,
  minusItem,
} from "../../redux/getSetItems/sliceGetItems";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import Image from "../../assets/image/01.png";
import "../css/popup.scss";
import React from "react";

const Popup: React.FC<changeItem> = ({
  id,
  name,
  imageUrl,
  getSizes,
  price,
  label,
  count,
}) => {
  const dispatch = useAppDispatch();
  const changeItem = useAppSelector((state) => state.items.changeItem);
  const close = (e: React.MouseEvent<HTMLDivElement>) => {
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

  const add = () => {
    dispatch(addItem({ id, imageUrl, name, label, getSizes, price, count }));
  };
  const remove = () => {
    dispatch(minusItem({ id, getSizes: getSizes, label, count }));
  };
  return (
    <>
      {changeItem?.id ? (
        <div className="popup _active" onClick={close}>
          <div className="popup__container">
            <div className="popup__row">
              <span onClick={close}></span>
              <div className="popup__column">
                <div className="popup__image">
                  <img src={imageUrl} alt="Пицца где-то потерялась 😔" />
                </div>
              </div>
              <ul className="popup__column">
                <li className="popup__caloric">
                  Калорийность: {changeItem.info?.caloric} ккал
                </li>
                <li className="popup__proteins">
                  Белки: {changeItem.info?.proteins} г
                </li>
                <li className="popup__fats">Жиры: {changeItem.info?.fats} г</li>
                <li className="popup__carbohyd">
                  Углеводы: {changeItem.info?.carbohyd} г
                </li>
                <li className="popup__fiber">
                  Пищевые волокна: {changeItem.info?.fiber} г
                </li>
                <li className="popup__water">
                  Вода: {changeItem.info?.water} г
                </li>
              </ul>
            </div>
            <div className="popup__items">
              <button className="popup__button-remove" onClick={() => remove()}>
                Удалить
              </button>
              <button className="popup__button-add" onClick={() => add()}>
                Добавить
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="popup"></div>
      )}
    </>
  );
};

export default Popup;
