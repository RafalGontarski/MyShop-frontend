import {BaseUrl} from '../constants/constants';
import axios from "axios";
import {AddCategoryRequest} from "./category/AddCategoryRequest";
import AddCategoryResponse from "./category/AddCategoryResponse";
import CategoryType from "../models/types/CategoryType";



export class CategoryApi {
    static addCategory = async (request: AddCategoryRequest) =>
        await axios.post<AddCategoryResponse>(`${BaseUrl}/api/categories`, request);

    static getAllCategoriesName = async (): Promise<CategoryType[]> => {
        const response = await axios.get<CategoryType[]>(`${BaseUrl}/api/categories`);

        console.log("Odpowiedź z API dla /api/categories:", response.data);

        return response.data;
    }

    static getSubCategoriesNames = async (categoryId: number | undefined): Promise<string[]> => {
        const response = await axios.get<string[]>(`${BaseUrl}/api/categories/${categoryId}/subcategories/names`);

        console.log(`Odpowiedź z API dla /api/categories/${categoryId}/subcategories/names:`, response.data);

        return response.data;
    }



}