import React from "react";
import { TSort } from "./Categories";
const sortList = [
  { name: "популярности", sortCategory: "rating" },
  { name: "цене", sortCategory: "price" },
  { name: "алфавиту", sortCategory: "name" },
];

interface TFilter {
  ascDesc: boolean;
  onAscDesc: () => void;
  onSelectSort: (value: TSort) => void;
  sort: TSort;
}

const Sort: React.FC<TFilter> = ({
  ascDesc,
  onAscDesc,
  sort,
  onSelectSort,
}) => {
  const [activePopup, setActivePopup] = React.useState(false);
  const handleClick = (value: TSort) => {
    onSelectSort(value);
    setActivePopup(!activePopup);
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
        <div
          className="sort__body"
          onClick={() => setActivePopup(!activePopup)}
        >
          <div className="sort__title">Сортировка по:</div>
          <div className="sort__subtitle">{sort.name}</div>
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
                sort.sortCategory == item.sortCategory
                  ? "sort__item sort__item_active"
                  : "sort__item"
              }
              onClick={() => handleClick(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sort;
