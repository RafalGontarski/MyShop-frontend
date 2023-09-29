import React, {useEffect, useState} from 'react';

import {
    LeftButtonContainer,
    CarouselContainer,
    RightButtonContainer,
    CarouselBtn,
    SlimArrowLeft,
    SlimArrowRight,
    CarouselImage,
    CarouselImgContainer
} from "./Carousel.styles";

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(1);
    const [displayedImages, setDisplayedImages] = useState<string[]>(images);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [endX, setEndX] = useState<number>(0);
    const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 850);
    const [translateValue, setTranslateValue] = useState<number>(0);


    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth < 850);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const left = images[(currentIndex - 1 + images.length) % images.length];
        const center = images[currentIndex % images.length];
        const right = images[(currentIndex + 1) % images.length];
        setDisplayedImages([left, center, right]);
    }, [currentIndex, images]);

    const goLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDesktop) return;

        const middleOfScreen = window.innerWidth / 2;

        if (e.clientX < middleOfScreen) {
            goLeft();
        } else {
            goRight();
        }
    };


    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !isDesktop) return;
        setEndX(e.clientX);
    };

    const handleMouseUp = () => {
        if (!isDragging || !isDesktop) return;

        const difference = endX - startX;

        if (difference > 50) {
            setTranslateValue(translateValue - 785); // przesunięcie o szerokość jednego obrazu w lewo
        } else if (difference < -50) {
            setTranslateValue(translateValue + 785); // przesunięcie o szerokość jednego obrazu w prawo
        }

        setIsDragging(false);
        setStartX(0);
        setEndX(0);
    };



    return (
        <CarouselContainer
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            <LeftButtonContainer>
                <CarouselBtn onClick={goLeft}>
                    <SlimArrowLeft size={15} />
                </CarouselBtn>
            </LeftButtonContainer>
            <RightButtonContainer>
                <CarouselBtn onClick={goRight}>
                    <SlimArrowRight size={15} />
                </CarouselBtn>
            </RightButtonContainer>
            <CarouselImgContainer
                isDesktop={isDesktop}
                translateValue={translateValue}
            >
                {displayedImages.map((image, index) => (
                    <CarouselImage
                        key={index}
                        src={image}
                        alt={`carousel-${index}`}
                    />
                ))}
            </CarouselImgContainer>

        </CarouselContainer>
    );
}

export default Carousel;















