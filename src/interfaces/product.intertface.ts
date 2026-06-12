import type { User } from "./user.interface";

export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  descriptionDetails: string;
  slug: string;
  stock: number;
  sizes: Size[];
  gender: Gender;
  tags: String[];
  images: string[];
  colors: { name: string; hex: string }[];
  details: string[];

  user: User;
}

export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL ";

export type Gender = "kid" | "men" | "women" | "unisex";
