import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { ListPizza } from "../index";
import Skeleton from "./loading/Skeleton";
import Error from "./error/Error";
import { getPizzac } from "../../redux/getSetItems/sliceFetchItems";

const Pizzac = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state) => state.pizza.items);
  const status = useAppSelector((state) => state.pizza.status);
  const inputValue = useAppSelector((state) => state.input.inputValue);
  React.useEffect(() => {
    dispatch(getPizzac());
  }, []);

  const sortPizza = data
    .filter((item) => {
      if (item.name.toLowerCase().includes(inputValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((item, index: number) => <ListPizza key={index} {...item} />);

  return (
    <div className="pizzac">
      <div className="container">
        <div className="pizzac__title">Все пиццы</div>
        <div className="skeleton__row">
          {status == "pending"
            ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
            : sortPizza}
        </div>
        {status == "rejected" && <Error />}
      </div>
    </div>
  );
};
export default Pizzac;
