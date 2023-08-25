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
        return response.data;
    }


}