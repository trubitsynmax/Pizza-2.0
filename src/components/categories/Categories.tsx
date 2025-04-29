import React from "react"; //!React component
import { Sort } from "./index"; //!custom component sort
import "../style.css"; //!css
import { useAppDispatch, useAppSelector } from "../../redux/store"; //!dispatch / selector
import {
  selectAscDesc,
  selectCategory,
  selectSort,
} from "../../redux/sortItems/sliceSort"; //!slice asc/desc, search category (selectCategory), searc sort (selectSort)
import { ISortList } from "../types/types"; //!types
import { listCategory } from "./data"; //!data categories list
import { shallowEqual } from "react-redux";
import useSelectUserFilter from "./SelectUserFilter";

const Categories: React.FC = () => {
  const dispatch = useAppDispatch();
  useSelectUserFilter();

  const { ascDesc, listCategoryId, sort } = useAppSelector(
    (state) => ({
      ascDesc: state.sort.AscDesc,
      listCategoryId: state.sort.listCategoryId,
      sort: state.sort.sortName,
    }),
    shallowEqual
  );
  const getCategoryIndex = React.useCallback((idx: number) => {
    dispatch(selectCategory(idx));
  }, []);
  const getAscOrDesc = React.useCallback(() => {
    dispatch(selectAscDesc(!ascDesc));
  }, []);
  const getSelectSort = React.useCallback((value: ISortList) => {
    dispatch(selectSort(value));
  }, []);

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
