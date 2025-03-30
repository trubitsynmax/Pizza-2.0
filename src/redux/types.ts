export type TItemsPizza = {
  id: string;
  imageUrl: string;
  name: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number[];
  rating: number;
  count: number;
};

export type TItemSelectionPizza = {
  id: string;
  imageUrl: string;
  name: string;
  label: number;
  getSizes: number;
  price: number;
  count: number;
};

export type ComparisonObj = {
  id: string;
  label: number;
  getSizes: number;
  count: number;
};
