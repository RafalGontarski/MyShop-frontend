import CategoryType from "./CategoryType";
import SubCategoryType from "./SubCategoryType";
import SecondSubCategoryType from "./SecondSubCategoryType";
//
// export type SecondSubCategoryType = {
//     id: number;
//     name: string;
//     subCategory: SubCategoryType;
// }

export type ProductType = {
    id: number;
    manufacturer: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string | null;
    category: CategoryType;
    subCategory: SubCategoryType;
    secondSubCategory?: SecondSubCategoryType;
}