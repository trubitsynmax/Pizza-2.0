import React from "react";
import { Sort } from "../index";
import "../style.css";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import {
  selectAscDesc,
  selectCategory,
  selectSort,
} from "../../redux/InputSort/sortSlice";

export interface TSort {
  name: string;
  sortCategory: string;
}

type TCategory = {
  id: number;
  category: string;
}[];

const listCategory: TCategory = [
  { id: 0, category: "Все" },
  { id: 1, category: "Мясные" },
  { id: 2, category: "Вегетарианская" },
  { id: 3, category: "Гриль" },
  { id: 4, category: "Острые" },
  { id: 5, category: "Закрытые" },
];

const Categories: React.FC = () => {
  const dispatch = useAppDispatch();
  const ascDesc = useAppSelector((state) => state.sort.AscDesc);
  const categoryId = useAppSelector((state) => state.sort.categoryId);
  const sort = useAppSelector((state) => state.sort.sortName);
  const getIndex = (idx: number) => {
    dispatch(selectCategory(idx));
  };
  const onAscDesc = () => {
    dispatch(selectAscDesc(!ascDesc));
  };
  const onSelectSort = (value: TSort) => {
    dispatch(selectSort(value));
  };

  React.useEffect(() => {}, []);

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
                    categoryId == item.id
                      ? "categories__item categories__item_active"
                      : "categories__item"
                  }
                  onClick={() => getIndex(index)}
                >
                  {item.category}
                </li>
              ))}
            </ul>
          </div>
          <div className="categories__column categories__column_big_small">
            <Sort
              ascDesc={ascDesc}
              onAscDesc={onAscDesc}
              sort={sort}
              onSelectSort={onSelectSort}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;
