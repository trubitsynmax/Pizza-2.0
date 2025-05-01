import React from "react"; //!react component
import { ISortList, IFilters } from "../types/types"; //!types
import { sortList } from "./data"; //!sort data
import arrow from "../../assets/image/arrowAscDesc.png"; //!black arrow for sort

const Sort: React.FC<IFilters> = ({
  ascDesc,
  getAscOrDesc,
  sort,
  getSelectSort,
}) => {
  const [activePopup, setActivePopup] = React.useState(false);
  const selectSort = (value: ISortList): void => {
    getSelectSort(value);
    setActivePopup(!activePopup);
  };

  return (
    <div className="sort">
      <div className="sort__row">
        <img
          src={arrow}
          alt="Иконка поиска больше/меньше пропала"
          className={ascDesc ? "sort__arrow" : "sort__arrow sort__arrow_active"}
          onClick={getAscOrDesc}
        />
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
              onClick={() => selectSort(item)}
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
