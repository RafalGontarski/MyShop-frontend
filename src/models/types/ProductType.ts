import CategoryType from "./CategoryType";

export type SubCategoryType = {
    id: number;
    name: string;
    category: CategoryType;
}

export type ProductType = {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string | null;
    subCategory: SubCategoryType;
}