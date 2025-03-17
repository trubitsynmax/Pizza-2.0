import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { ListPizza } from "../index";
import { fetchItems } from "../../redux/getItems/getItems";
import Skeleton from "./loading/Skeleton";
import Error from "./error/Error";
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
        {status == "pending" && (
          <div className="skeleton__row">
            {[...new Array(8)].map((_, index) => (
              <Skeleton key={index} />
            ))}
            <Skeleton />
          </div>
        )}
        {status === "fulfilled" && (
          <div className="pizzac__row">
            {data.map((item, index) => (
              <ListPizza key={index} {...item} />
            ))}
          </div>
        )}
        {status == "rejected" && <Error />}
      </div>
    </div>
  );
};
export default Pizzac;
