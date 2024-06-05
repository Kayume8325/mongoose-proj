// export type TVarient = {
//   type: string;
//   value: string;
// };

// export type TTags = {
//   type: string;
// };

// export type TProduct = {
//   name: string;
//   description: string;
//   price: number;
//   category: string;
//   tags: [TTags];
//   variants: [TVarient];
//   inventory: {
//     quantity: number;
//     inStock: boolean;
//   };
// };

export type TVarient = {
  type: string;
  value: string;
};

export type TProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: TVarient[];
  inventory: {
    quantity: number;
    inStock: boolean;
  };
};
