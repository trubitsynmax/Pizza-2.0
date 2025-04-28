import { TPlusItem } from "../types/types"; //!types
import { multiplication, plus } from "./mathFunctions"; //!function for multiplication and function for plus

const getItemsLS = () => {
  const data = localStorage.getItem("items");
  const items: TPlusItem[] = data ? JSON.parse(data) : [];
  const totalPrice: number = multiplication(items);
  const count: number = plus(items);
  return {
    items,
    count,
    totalPrice,
  };
};

export default getItemsLS;
