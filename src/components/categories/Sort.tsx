import React from "react";

const sortList = ["популярности", "цене", "алфавиту"];

const Sort = () => {
  const [activePopup, setActivePopup] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);

  const onClickPopup = () => {
    setActivePopup(!activePopup);
  };

  const onActiveItem = (idx: number) => {
    setActiveItem(idx);
    setActivePopup(!activePopup);
  };

  return (
    <div className="sort">
      <div className="sort__row" onClick={onClickPopup}>
        <div className="sort__arrow">
          <span></span>
        </div>
        <div className="sort__title">Сортировка по:</div>
        <div className="sort__subtitle">{sortList[activeItem]}</div>
      </div>
      <div
        className={
          activePopup ? "sort__popup" : "sort__popup sort__popup_active"
        }
      >
        <ul className="sort__body">
          {sortList.map((item, index) => (
            <li
              key={index}
              className={
                activeItem == index
                  ? "sort__item sort__item_active"
                  : "sort__item"
              }
              onClick={() => onActiveItem(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sort;
