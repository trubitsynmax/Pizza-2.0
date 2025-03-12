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
          <div className="categories__column">
            {listCategory.map((item, index) => (
              <button
                key={index}
                className={
                  value == item.id
                    ? "categories__list categories__list_active"
                    : "categories__list"
                }
                onClick={() => getIndex(index)}
              >
                {item.category}
              </button>
            ))}
          </div>
          <div className="categories__column">
            <Sort />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;
