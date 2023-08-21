import React from 'react';
import {MainPageContainer} from "./mainPage.styles";
import CarouselImg1 from "../../resources/carouselPng/carousel1.png";
import CarouselImg2 from "../../resources/carouselPng/carousel2.png";
import CarouselImg3 from "../../resources/carouselPng/carousel3.png";
import CarouselImg4 from "../../resources/carouselPng/carousel4.png";
import CarouselImg5 from "../../resources/carouselPng/carousel5.png";
import Carousel from "../../components/imageCarousel/ImageCarousel";

type MainPageProps = {
    userName: string | null;
};

const MainPage: React.FC<MainPageProps> = ({userName}) => {
    return (
        <MainPageContainer>
            {userName && <h1>Witaj, {userName}!</h1>}

            <Carousel images={[
                CarouselImg1,
                CarouselImg2,
                CarouselImg3,
                CarouselImg4,
                CarouselImg5
            ]}/>
        </MainPageContainer>
    );
}

export default MainPage;
