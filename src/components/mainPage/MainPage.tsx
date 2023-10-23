import React, {useEffect, useState} from 'react';
import {MainPageContainer} from "./mainPage.styles";
import Carousel from "./carousel/Carousel";
import {CarouselImageApi} from "../../api/CarouselImageApi";
import {DisplayCategoriesInMainPage} from "../categories/DisplayCategoriesInMainPage/DisplayCategoriesInMainPage";
import {MainPageLinksUnderCarousel} from "./MainPageLinksUnderCarousel";
import {useTranslation} from "react-i18next";




type MainPageProps = {
    userName: string | null;
};

const MainPage: React.FC<MainPageProps> = ({userName}) => {

    const [carouselImages, setCarouselImages] = useState<string[]>([]);
    const { t } = useTranslation();

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
            {userName && <h1>{t('loginDrawer.greeting')}, {userName}!</h1>}
            <Carousel images={carouselImages} />
            {!userName && <MainPageLinksUnderCarousel />}
            <DisplayCategoriesInMainPage />

        </MainPageContainer>
    );
}

export default MainPage;
