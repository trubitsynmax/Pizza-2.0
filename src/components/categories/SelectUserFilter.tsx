import React from "react"; //!react component
import { useAppDispatch, useAppSelector } from "../../redux/store"; //!redux + typescript component
import { useNavigate } from "react-router-dom"; //!react-router compoent
import { getPizzac } from "../../redux/items/sliceFetchItems"; //!slice fetch
import { selectUrl } from "../../redux/sortItems/sliceSort"; //!slice filters in url
import qs from "qs"; //!qs library
import { sortList } from "./data"; //!sort: популярность, цена, алфавит
import { shallowEqual } from "react-redux";

const useSelectUserFilter = () => {
  const navigate = useNavigate();
  const fisrtRender = React.useRef<boolean>(false);
  const dispatch = useAppDispatch();

  const { category, sort, ascDesc } = useAppSelector(
    (state) => ({
      category: state.sort.listCategoryId,
      sort: state.sort.sortName,
      ascDesc: state.sort.AscDesc,
    }),
    shallowEqual
  );

  const isCategory = category >= 0 ? `category=${category}` : "";
  const isAscDesc: string = ascDesc ? `order=asc` : "order=desc";
  const isSort = sort ? `sortBy=${sort.sortCategory}` : "";

  React.useEffect((): void => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const filter = Number(params.filter);
      const order = String(params.order);
      const sort = sortList.find((obj) => {
        return obj.sortCategory === params.sort;
      });
      if (sort) {
        dispatch(selectUrl({ filter, order, sort }));
      }
    } else {
      dispatch(getPizzac({ isCategory, isAscDesc, isSort }));
    }
  }, []);
  React.useEffect((): void => {
    if (fisrtRender.current) {
      dispatch(getPizzac({ isCategory, isAscDesc, isSort }));
    }
  }, [category, sort, ascDesc]);

  React.useEffect((): void => {
    if (fisrtRender.current) {
      const newUrl = qs.stringify({
        filter: category,
        order: ascDesc,
        sort: sort.sortCategory,
      });
      navigate(`?${newUrl}`);
    }
    fisrtRender.current = true;
  }, [isCategory, isAscDesc, isSort]);
};

export default useSelectUserFilter;
