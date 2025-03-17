import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { ListPizza } from "../index";
import { fetchItems } from "../../redux/getItems/getItems";

const Pizzac = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.pizza.items);
  const status = useAppSelector((state) => state.pizza.status);
  console.log(data);
  React.useEffect(() => {
    dispatch(fetchItems());
  }, []);

  return (
    <div className="pizzac">
      <div className="container">
        <div className="pizzac__title">Все пиццы</div>
        {status == "pending" && <div>Пока это примерная загрузка</div>}
        {status === "fulfilled" && (
          <div className="pizzac__row">
            {data.map((item, index) => (
              <ListPizza key={index} {...item} />
            ))}
          </div>
        )}
        {status == "rejected" && <div>Заглушка, исправить</div>}
      </div>
    </div>
  );
};
export default Pizzac;
