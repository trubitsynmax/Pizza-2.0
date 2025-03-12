import React from "react";

const sortList = ["популярности", "цене", "алфавиту"];

const Sort = () => {
  const [activePopup, setActivePopup] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);
  const [ascDesc, setAscDesc] = React.useState(true);

  const onClickPopup = () => {
    setActivePopup(!activePopup);
  };

  const onActiveItem = (idx: number) => {
    setActiveItem(idx);
    setActivePopup(!activePopup);
  };

  const onAscDesc = () => {
    setAscDesc(!ascDesc);
  };

  return (
    <div className="sort">
      <div className="sort__row">
        <div
          className={ascDesc ? "sort__arrow" : "sort__arrow sort__arrow_active"}
          onClick={onAscDesc}
        >
          <span></span>
        </div>
        <div className="sort__body" onClick={onClickPopup}>
          <div className="sort__title">Сортировка по:</div>
          <div className="sort__subtitle">{sortList[activeItem]}</div>
        </div>
      </div>
      <div
        className={
          activePopup ? "sort__popup sort__popup_active" : "sort__popup"
        }
      >
        <ul className="sort__items">
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
