import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  addItem,
  selectedItem,
  removeItem,
} from "../../redux/items/sliceItems";
import { namesTypes } from "../categories/data"; //!["традиционное", "тонкое"]
import { TFullItems } from "../types/types";
import { setItemsLS } from "../utils/index"; //!utils function set in local storage
const CardPizza: React.FC<TFullItems> = ({
  id,
  imageUrl,
  name,
  types,
  sizes,
  price,
  count,
  info,
}) => {
  const [typesPizza, setTypesPizza] = React.useState(0);
  const [size, setSize] = React.useState(0);
  const dispatch = useAppDispatch();
  const item = useAppSelector((state) => state.items.items);
  setItemsLS(item);
  const onAddPizza = (): void => {
    dispatch(
      addItem({
        id,
        imageUrl,
        name,
        typesPizza,
        getSizes: sizes[size],
        price,
        count,
      })
    );
  };
  const openPopup = (): void => {
    dispatch(
      selectedItem({
        id,
        imageUrl,
        name,
        typesPizza,
        getSizes: sizes[size],
        price,
        count,
        info,
      })
    );
  };
  const minusItem = (): void => {
    dispatch(removeItem({ id, getSizes: sizes[size], typesPizza, count }));
  };
  const onClickTypesPizza = (idx: number): void => {
    setTypesPizza(idx);
  };
  const onChangeSize = (idx: number): void => {
    setSize(idx);
  };

  const add: number = item
    .filter((obj) => obj.id == id)
    .reduce((sum, item) => item.count + sum, 0);

  const localItem = item.filter(
    (obj) => obj.id === id && obj.typesPizza === typesPizza
  );

  const selectItem = React.useMemo((): number => {
    if (!item.length) return 0;
    const items = item?.find((item) => item.getSizes == sizes[size]);
    return items?.count || 0;
  }, [item, size]);

  return (
    <div className="pizzac__column">
      <div className="pizzac__image">
        <img src={imageUrl} alt="" onClick={() => openPopup()} />
      </div>
      <div className="pizzac__sub-title">{name}</div>
      <div className="pizzac__body-card">
        <div className="pizzac__types">
          {types.map((type, index) => (
            <button
              className={
                typesPizza == index
                  ? "pizzac__type pizzac__type_active"
                  : "pizzac__type"
              }
              key={index}
              onClick={() => onClickTypesPizza(index)}
            >
              {namesTypes[type]}
            </button>
          ))}
        </div>
        <ul className="pizzac__sizes">
          {sizes.map((item, index) => (
            <div
              className={
                size == index
                  ? "pizzac__size pizzac__size_active"
                  : "pizzac__size"
              }
              key={index}
              onClick={() => onChangeSize(index)}
            >
              {item} см
              {localItem &&
                localItem.map((item) =>
                  item.getSizes == sizes[index] ? (
                    <span key={item.id}>{item.count}</span>
                  ) : null
                )}
            </div>
          ))}
        </ul>
      </div>
      <div className="pizzac__buttons">
        <div className="pizzac__price">от {price} ₽</div>
        <div className="pizzac__btn-wrapper">
          <button
            className="pizzac__btn"
            disabled={selectItem < 1}
            onClick={() => minusItem()}
          >
            <span
              className={
                add > 0 ? "pizzac__btn-remove _active" : "pizzac__btn-remove"
              }
            >
              Удалить
            </span>
          </button>
          <button className="pizzac__btn" onClick={() => onAddPizza()}>
            <span
              className={
                add > 0 ? "pizzac__btn-add _active" : "pizzac__btn-add"
              }
            >
              + Добавить
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardPizza;
