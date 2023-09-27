import axios from "axios";
import {BaseUrl} from "../constants/constants";
import {ProductType} from "../models/types/ProductType";


export class ProductApi {
    static getAllProducts = async (): Promise<ProductType[]> => {
        const response =
            await axios.get<ProductType[]>(`${BaseUrl}/api/products`);

        console.log("Odpowiedź z API dla /api/products:", response.data);

        return response.data;
    }

    static getProductsBySubCategoryId = async (subCategoryId: number): Promise<ProductType[]> => {
        const response = await axios.get<ProductType[]>(`${BaseUrl}/api/products/subCategory/${subCategoryId}`);

        console.log("Odpowiedź z API dla /api/products/subCategory/:subCatId", response.data);
        return response.data;
    }
    static getProductsBySecondSubCategoryId = async (secondSubCategoryId: number): Promise<ProductType[]> => {
        const response = await axios.get<ProductType[]>(`${BaseUrl}/api/products/secondSubCategory/${secondSubCategoryId}`);

        console.log("Odpowiedź z API dla /api/products/secondSubCategory/:secondSubCatId", response.data);
        return response.data;
    }


}