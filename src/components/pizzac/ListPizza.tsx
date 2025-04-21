import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  addItem,
  getChangeItem,
  minusItem,
} from "../../redux/getSetItems/sliceGetItems";
export const namesTypes: string[] = ["традиционное", "тонкое"];

export type FullInfo = {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number[];
  rating: number;
  count: number;
  info: {
    caloric: number;
    proteins: number;
    fats: number;
    carbohyd: number;
    fiber: number;
    water: number;
  };
};

const ListPizza: React.FC<FullInfo> = ({
  id,
  imageUrl,
  name,
  types,
  sizes,
  price,
  count,
  info,
}) => {
  const [label, setLabel] = React.useState(0);
  const [getSizes, setSizes] = React.useState(0);
  const selectItems = useAppSelector((state) => state.items.items);
  const item = useAppSelector((state) => state.items.items);
  const totalPrice: number = item
    .filter((obj) => obj.id == id)
    .reduce((sum, item) => item.count + sum, 0);

  const localItem = selectItems.filter(
    (obj) => obj.id === id && obj.label === label
  );
  const selectItem = React.useMemo(() => {
    if (!localItem.length) return 0;
    const items = localItem?.find((item) => item.getSizes == sizes[getSizes]);
    return items?.count || 0;
  }, [localItem, getSizes]);
  const dispatch = useAppDispatch();
  const getPizza = (): void => {
    dispatch(
      addItem({
        id,
        imageUrl,
        name,
        label,
        getSizes: sizes[getSizes],
        price,
        count,
      })
    );
  };
  const removeItem = () => {
    dispatch(minusItem({ id, getSizes: sizes[getSizes], label, count }));
  };

  const onClickLabel = (idx: number) => {
    setLabel(idx);
  };
  const onClickSize = (idx: number) => {
    setSizes(idx);
  };

  const onClickPopup = () => {
    dispatch(
      getChangeItem({
        id,
        imageUrl,
        name,
        label,
        getSizes: sizes[getSizes],
        price,
        count,
        info,
      })
    );
  };

  return (
    <div className="pizzac__column">
      <img
        src={imageUrl}
        alt=""
        className="pizzac__image"
        onClick={() => onClickPopup()}
      />
      <div className="pizzac__sub-title">{name}</div>
      <div className="pizzac__body">
        <div className="pizzac__wrapper">
          {types.map((type, index) => (
            <div
              className={
                label == index
                  ? "pizzac__label pizzac__label_active"
                  : "pizzac__label"
              }
              key={index}
              onClick={() => onClickLabel(index)}
            >
              {namesTypes[type]}
            </div>
          ))}
        </div>
        <ul className="pizzac__range">
          {sizes.map((size, index) => (
            <div
              className={
                getSizes == index
                  ? "pizzac__size pizzac__size_active"
                  : "pizzac__size"
              }
              key={index}
              onClick={() => onClickSize(index)}
            >
              {size} см
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
      <div className="pizzac__item">
        <div className="pizzac__price">от {price} ₽</div>
        <div className="pizzac__btn-wrapper">
          <button
            className="pizzac__btn"
            disabled={selectItem < 1}
            onClick={() => removeItem()}
          >
            <span
              className={
                totalPrice > 0
                  ? "pizzac__btn-remove _active"
                  : "pizzac__btn-remove"
              }
            >
              Удалить
            </span>
          </button>
          <button className="pizzac__btn" onClick={() => getPizza()}>
            <span
              className={
                totalPrice > 0 ? "pizzac__btn-add _active" : "pizzac__btn-add"
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
export default ListPizza;
