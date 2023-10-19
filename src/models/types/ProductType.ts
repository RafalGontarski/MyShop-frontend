import CategoryType from "./CategoryType";
import SubCategoryType from "./SubCategoryType";

export type SecondSubCategoryType = {
    id: number;
    name: string;
    subCategory: SubCategoryType;
}

export type ProductType = {
    id: number;
    producent: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string | null;
    category: CategoryType;
    subCategory: SubCategoryType;
    secondSubCategory?: SecondSubCategoryType;
}