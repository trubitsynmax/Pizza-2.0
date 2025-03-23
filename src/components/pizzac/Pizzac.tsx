import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { ListPizza } from "../index";
import Skeleton from "./loading/Skeleton";
import Error from "./error/Error";
import { getPizzac } from "../../redux/getSetItems/sliceFetchItems";
import "../css/pizzac.scss";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { selectFetch } from "../../redux/InputSort/sortSlice";
import { sortList } from "../categories/Sort";

const Pizzac = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const fisrRender = React.useRef<boolean>(false);
  const data = useAppSelector((state) => state.pizza.items);
  const status = useAppSelector((state) => state.pizza.status);
  const inputValue = useAppSelector((state) => state.sort.inputValue);

  const category = useAppSelector((state) => state.sort.categoryId);
  const sort = useAppSelector((state) => state.sort.sortName);
  const ascDesc = useAppSelector((state) => state.sort.AscDesc);

  const isCategory = category >= 0 ? `category=${category}` : "";
  const isAscDesc = ascDesc ? `order=asc` : "order=desc";
  const isSort = sort ? `sortBy=${sort.sortCategory}` : "";
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const filter = Number(params.filter);
      const order = String(params.order);
      const sort = sortList.find((obj) => {
        return obj.sortCategory === params.sort;
      });
      if (sort) {
        dispatch(selectFetch({ filter, order, sort }));
      }
    } else {
      dispatch(getPizzac({ isCategory, isAscDesc, isSort }));
    }
  }, []);
  React.useEffect(() => {
    if (fisrRender.current) {
      dispatch(getPizzac({ isCategory, isAscDesc, isSort }));
    }
  }, [isCategory, isAscDesc, isSort]);

  React.useEffect(() => {
    if (fisrRender.current) {
      const newUrl = qs.stringify({
        filter: category,
        order: ascDesc,
        sort: sort.sortCategory,
      });
      navigate(`?${newUrl}`);
    }
    fisrRender.current = true;
  }, [isCategory, isAscDesc, isSort]);

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
          {status === "pending" ? (
            <div className="skeleton__row">
              {[...new Array(8)].map((_, index) => (
                <Skeleton key={index} />
              ))}
            </div>
          ) : (
            <div className="pizzac__row">{sortPizza}</div>
          )}
        </div>
        {status == "rejected" && <Error />}
      </div>
    </div>
  );
};
export default Pizzac;
