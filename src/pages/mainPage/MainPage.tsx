import React, {useEffect, useState} from 'react';
import {MainPageContainer} from "./mainPage.styles";
import Carousel from "../../components/carousel/Carousel";
import {CarouselImageApi} from "../../api/CarouselImageApi";
import {DisplayCategoriesInMainPage} from "../../components/categories/DisplayCategoriesInMainPage";




type MainPageProps = {
    userName: string | null;
};

const MainPage: React.FC<MainPageProps> = ({userName}) => {

    const [carouselImages, setCarouselImages] = useState<string[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await CarouselImageApi.getAllImages();
                const imagesBase64 = response.data.map((imgObj: any) => `data:image/png;base64,${imgObj.image}`);
                setCarouselImages(imagesBase64);
                // console.log(response);

            } catch (error) {
                console.error("Błąd podczas pobierania zdjęć z karuzeli:", error);
            }
        };

        fetchImages();
    }, []);

    return (
        <MainPageContainer>
            {userName && <h1>Witaj, {userName}!</h1>}

            <Carousel images={carouselImages} />
            <DisplayCategoriesInMainPage />

        </MainPageContainer>
    );
}

export default MainPage;
