import {BaseUrl} from '../constants/constants';
import axios from "axios";
import {AddCategoryRequest} from "../models/api/category/AddCategoryRequest";
import AddCategoryResponse from "../models/api/category/AddCategoryResponse";
import CategoryType from "../models/CategoryType";

export class CategoryApi {
    static addCategory = async (request: AddCategoryRequest) =>
        await axios.post<AddCategoryResponse>(`${BaseUrl}/api/categories`, request);

    static getAllCategoriesName = async (): Promise<CategoryType[]> => {
        const response = await axios.get<CategoryType[]>(`${BaseUrl}/api/categories`);
        return response.data;
    }


}