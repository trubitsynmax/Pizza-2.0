import React from "react"; //!React component
import { Sort } from "../index"; //!custom component sort
import "../style.css"; //!css
import { useAppDispatch, useAppSelector } from "../../redux/store"; //!dispatch / selector
import {
  selectAscDesc,
  selectCategory,
  selectSort,
} from "../../redux/sortItems/sliceSort"; //!slice asc/desc, search category (selectCategory), searc sort (selectSort)
import { ISortList } from "../types/types"; //!types
import { listCategory } from "./data"; //!categories list

const Categories: React.FC = () => {
  const dispatch = useAppDispatch();
  const ascDesc = useAppSelector((state) => state.sort.AscDesc);
  const listCategoryId = useAppSelector((state) => state.sort.listCategoryId);
  const sort = useAppSelector((state) => state.sort.sortName);
  const getCategoryIndex = (idx: number) => {
    dispatch(selectCategory(idx));
  };
  const getAscOrDesc = () => {
    dispatch(selectAscDesc(!ascDesc));
  };
  const getSelectSort = (value: ISortList) => {
    dispatch(selectSort(value));
  };

  return (
    <div className="categories">
      <div className="container">
        <div className="categories__row">
          <div className="categories__column categories__column_big">
            <ul className="categories__list">
              {listCategory.map((item, index) => (
                <li
                  key={index}
                  className={
                    listCategoryId == item.id
                      ? "categories__item categories__item_active"
                      : "categories__item"
                  }
                  onClick={() => getCategoryIndex(index)}
                >
                  {item.category}
                </li>
              ))}
            </ul>
          </div>
          <div className="categories__column categories__column">
            <Sort
              ascDesc={ascDesc}
              getAscOrDesc={getAscOrDesc}
              sort={sort}
              getSelectSort={getSelectSort}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;
