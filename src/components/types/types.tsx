//use: data -> listCategory
type TListCategory = {
  id: number;
  category: string;
}[];

//use: categories -> Categories & categories -> Sort
interface ISortList {
  name: string;
  sortCategory: string;
}
//use: categories -> Sort
interface IFilters {
  ascDesc: boolean;
  getAscOrDesc: () => void;
  getSelectSort: (value: ISortList) => void;
  sort: ISortList;
}

//use: redux -> items -> sliceFetchItems
type TUrlFilter = {
  isCategory: string;
  isAscDesc: string;
  isSort: string;
};

//use: never
type TLocalItem = {
  id: string;
  imageUrl: string;
  name: string;
  typesPizza: number;
  getSizes: number;
  price: number;
  count: number;
  info: {
    caloric: number;
    proteins: number;
    fats: number;
    carbohyd: number;
    fiber: number;
    water: number;
  };
};

//use: redux -> items -> sliceItems
type TSelectItem = TLocalItem | null;

//use: redux -> items -> sliceData & redux -> items -> sliceItems
type TOnlyOneItem = {
  id: string;
  getSizes: number;
  typesPizza: number;
};

//use: redux -> sortItems -> sliceSort
type TSelectUrlFilter = {
  filter: number;
  order: string;
  sort: {
    name: string;
    sortCategory: string;
  };
};

//use: pizzac -> CardPizza & redux -> items -> sliceFetchItems
type TFullItems = {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number[];
  rating: number;
  count: number;
  info: {
    caloric: number;
    proteins: number;
    fats: number;
    carbohyd: number;
    fiber: number;
    water: number;
  };
};

//use: basket -> Basket & popup -> Popup & redux -> items -> sliceData & redux -> items -> sliceItems
type TPlusItem = {
  id: string;
  imageUrl: string;
  name: string;
  typesPizza: number;
  getSizes: number;
  price: number;
  count: number;
};

//use: redux -> items -> sliceData & redux -> items -> sliceItems
type TMinusItem = {
  id: string;
  typesPizza: number;
  getSizes: number;
  count: number;
};

export type {
  TListCategory,
  ISortList,
  IFilters,
  TUrlFilter,
  TLocalItem,
  TSelectItem,
  TOnlyOneItem,
  TSelectUrlFilter,
  TFullItems,
  TPlusItem,
  TMinusItem,
};
