import { TListCategory } from "../types/types";

const sortList = [
  { name: "популярности", sortCategory: "rating" },
  { name: "цене", sortCategory: "price" },
  { name: "алфавиту", sortCategory: "name" },
];

const namesTypes: string[] = ["традиционное", "тонкое"];

const listCategory: TListCategory = [
  { id: 0, category: "Все" },
  { id: 1, category: "Мясные" },
  { id: 2, category: "Вегетарианская" },
  { id: 3, category: "Гриль" },
  { id: 4, category: "Острые" },
  { id: 5, category: "Закрытые" },
];

export { sortList, namesTypes, listCategory };
