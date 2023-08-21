import React, {useEffect, useState} from 'react';
import {MainPageContainer} from "./mainPage.styles";
import CarouselImg1 from "../../resources/carouselPng/carousel1.png";
import CarouselImg2 from "../../resources/carouselPng/carousel2.png";
import CarouselImg3 from "../../resources/carouselPng/carousel3.png";
import CarouselImg4 from "../../resources/carouselPng/carousel4.png";
import CarouselImg5 from "../../resources/carouselPng/carousel5.png";
import Carousel from "../../components/imageCarousel/ImageCarousel";
import {CarouselImageApi} from "../../api/CarouselImageApi";

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
        </MainPageContainer>
    );
}

export default MainPage;
