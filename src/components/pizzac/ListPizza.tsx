import React from "react";
import { TItemsPizza } from "../../redux/getItems/getItems";
const ListPizza: React.FC<TItemsPizza> = ({
  imageUrl,
  name,
  types,
  sizes,
  price,
}) => {
  const namesTypes = ["традиционное", "тонкое"];
  const [label, setLabel] = React.useState(-1);
  const onClickLabel = (idx: number) => {
    setLabel(idx);
  };

  const [getSizes, setSizes] = React.useState(-1);
  const onClickSize = (idx: number) => {
    setSizes(idx);
  };

  return (
    <div className="pizzac__column">
      <img src={imageUrl} alt="" className="pizzac__image" />
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
            </div>
          ))}
        </ul>
      </div>
      <div className="pizzac__item">
        <div className="pizzac__price">от {price} ₽</div>
        <button className="pizzac__btn">
          <span>+</span>Добавить
        </button>
      </div>
    </div>
  );
};
export default ListPizza;
