import axios from "axios";
import {BaseUrl} from "../constants/constants";


type AddCarouselImgResponse = {
    id: number;
    image: string; // zakodowany obraz w formacie Base64
};

type CarouselImage = {
    id?: number; // Jeśli backend zwraca również ID obrazu
    image: Uint8Array; // Zakładając, że obraz jest zwracany jako tablica bajtów
    // Możesz dodać inne pola, jeśli backend zwraca dodatkowe informacje o obrazie
};


export class CarouselImageApi {
    static addNewCarouselImg = async (formData: FormData) => {
        return await axios.post<AddCarouselImgResponse>(`${BaseUrl}/api/carousel`, formData);
    }
    static getAllImages = async () => {
        return await axios.get<CarouselImage[]>(`${BaseUrl}/api/carousel`);
    }
}