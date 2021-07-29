export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: string | number;

  images: string[];

}

export interface ICategory {
  id: number;
  name: string;
  icon: string;
}

export interface ITag {
  text: string,
  size: number
}
