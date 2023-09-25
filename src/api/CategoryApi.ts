import {BaseUrl} from '../constants/constants';
import axios from "axios";
import {AddCategoryRequest} from "./category/AddCategoryRequest";
import AddCategoryResponse from "./category/AddCategoryResponse";
import CategoryType from "../models/types/CategoryType";
import SubCategoryType from "../models/types/SubCategoryType";



export class CategoryApi {
    static addCategory = async (request: AddCategoryRequest) => {
        try {
            return await axios.post<AddCategoryResponse>(`${BaseUrl}/api/categories`, request);
        } catch (error) {
            console.error("Błąd podczas dodawania kategorii:", error);
            throw error;
        }
    }

    static getAllCategoriesName = async (): Promise<CategoryType[]> => {
        try {
            const response = await axios.get<CategoryType[]>(`${BaseUrl}/api/categories`);
            console.log("Odpowiedź z API dla /api/categories:", response.data);
            return response.data;
        } catch (error) {
            console.error("Błąd podczas pobierania kategorii:", error);
            throw error;
        }
    }

    static getAllSubCategories = async (categoryId: number | undefined): Promise<SubCategoryType[]> => {
        if (typeof categoryId === 'undefined') {
            // Obsługuje sytuację, gdy categoryId jest undefined, na przykład rzucając błąd:
            throw new Error("categoryId is required.");
        }
        try {
            const response = await axios.get<SubCategoryType[]>(`${BaseUrl}/api/categories/${categoryId}/subCategories`);
            console.log("Odpowiedź z API dla /api/categories/subCategories:", response.data);
            return response.data;
        } catch (error) {
            console.error("Błąd podczas pobierania podkategorii:", error);
            throw error;
        }
    }

    static getAllSubCategoriesNames = async (categoryId: number | undefined): Promise<string[]> => {
        const response = await axios.get<string[]>(`${BaseUrl}/api/categories/${categoryId}/subcategories/names`);

        console.log(`Odpowiedź z API dla /api/categories/${categoryId}/subcategories/names:`, response.data);

        return response.data;
    }

}