export type ProductImage = {
  src: string;
  alt: string;
}

export type ProductType = {
  _id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  stockQuantity: number;
  images: ProductImage[];
  createdAt: string;
  updatedAt: string;
};
