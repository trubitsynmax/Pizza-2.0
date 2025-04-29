import { TPlusItem, TMinusItem, TOnlyOneItem } from "../types/types";

const findTrueItem = (items: TPlusItem[], payload: TPlusItem | TMinusItem) => {
  return items.find(
    (obj) =>
      obj.id === payload.id &&
      obj.getSizes === payload.getSizes &&
      obj.typesPizza === payload.typesPizza
  );
};
const findFalseItem = (
  items: TPlusItem[],
  payload: TOnlyOneItem | TMinusItem
) => {
  return items.filter(
    (obj) =>
      obj.id !== payload.id ||
      obj.typesPizza !== payload.typesPizza ||
      obj.getSizes !== payload.getSizes
  );
};

const plus = (items: TPlusItem[]) => {
  return items.reduce((sum, item) => {
    return item.count + sum;
  }, 0);
};

const multiplication = (items: TPlusItem[]) => {
  return items.reduce((sum, item) => {
    return item.price * item.count + sum;
  }, 0);
};

export { findTrueItem, findFalseItem, plus, multiplication };
