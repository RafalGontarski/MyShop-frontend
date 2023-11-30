import axios from "axios";
import {BaseUrl} from "../constants/constants";


type AddCarouselImgResponse = {
    id: number;
    image: string; // encoded image in Base64 format
};

type CarouselImage = {
    id?: number; // If the backend also returns the image ID
    image: Uint8Array; // Assuming the image is returned as an array of bytes
    // You can add other fields if the backend returns additional information about the image
};


export class CarouselImageApi {
    static addNewCarouselImg = async (formData: FormData) => {
        return await axios.post<AddCarouselImgResponse>(`${BaseUrl}/api/carousel`, formData);
    }
    static getAllImages = async () => {
        return await axios.get<CarouselImage[]>(`${BaseUrl}/api/carousel`);
    }
}