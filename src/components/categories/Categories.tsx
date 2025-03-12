import React from "react";
import { Sort } from "../index";
import "../style.css";

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
  const [value, setValue] = React.useState(0);

  const getIndex = (idx: number) => {
    setValue(idx);
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
                    value == item.id
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
            <Sort />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;
