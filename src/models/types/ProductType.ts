import CategoryType from "./CategoryType";
import SubCategoryType from "./SubCategoryType";

export type SecondSubCategoryType = {
    id: number;
    name: string;
    subCategory: SubCategoryType;
}

export type ProductType = {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string | null;
    subCategory: SubCategoryType;
    secondSubCategory: SecondSubCategoryType;
}