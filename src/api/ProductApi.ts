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
        const response = await axios.get<ProductType[]>(`${BaseUrl}/api/products/sub-category/${subCategoryId}`);

        console.log("Odpowiedź z API dla /api/products/sub-category/:subCatId", response.data);
        return response.data;
    }
}