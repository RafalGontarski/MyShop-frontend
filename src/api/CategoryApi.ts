import {BaseUrl} from '../constants/constants';
import axios from "axios";
import {AddCategoryRequest} from "./category/AddCategoryRequest";
import AddCategoryResponse from "./category/AddCategoryResponse";
import CategoryType from "../models/types/CategoryType";
import SubCategoryType from "../models/types/SubCategoryType";
import SecondSubCategoryType from "../models/types/SecondSubCategoryType";



export class CategoryApi {
    // Categories
    static addCategory = async (request: AddCategoryRequest) => {
        try {
            return await axios.post<AddCategoryResponse>(`${BaseUrl}/api/categories`, request);
        } catch (error) {
            console.error("Błąd podczas dodawania kategorii:", error);
            throw error;
        }
    }
    static getAllCategories = async (): Promise<CategoryType[]> => {
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

    //S ubCategories
    static getAllSubCategoriesNames = async (categoryId: number | undefined): Promise<string[]> => {
        const response = await axios.get<string[]>(`${BaseUrl}/api/categories/${categoryId}/subcategories/names`);

        console.log(`Odpowiedź z API dla /api/categories/${categoryId}/subcategories/names:`, response.data);

        return response.data;
    }

    // SecondSubCategories
    static getAllSecondSubCategories = async (categoryId: number | undefined, subCategoryId: number | undefined): Promise<SecondSubCategoryType[]> => {
        if (typeof categoryId === 'undefined' || typeof subCategoryId === 'undefined') {
            // Obsługuje sytuację, gdy categoryId lub subCategoryId jest undefined, na przykład rzucając błąd:
            throw new Error("Both categoryId and subCategoryId are required.");
        }

        try {
            const response = await axios.get<SecondSubCategoryType[]>(`${BaseUrl}/api/categories/${categoryId}/subCategories/${subCategoryId}/secondSubCategories`);
            console.log("Odpowiedź z API dla /api/categories/{categoryId}/subCategories/{subCategoryId}/secondSubCategories:", response.data);
            return response.data;
        } catch (error) {
            console.error("Błąd podczas pobierania drugorzędnych podkategorii:", error);
            throw error;
        }
    }




}