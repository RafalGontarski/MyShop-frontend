import React, {useEffect, useRef, useState} from 'react';
import { Button } from '@material-ui/core';

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [displayedImages, setDisplayedImages] = useState(images);

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

    const handleDragStart = (e: React.DragEvent<HTMLImageElement>) => {
        e.preventDefault();
    };

    const offset = (window.innerWidth - 785) / 2;

    return (
        <div style={{
            position: 'relative', overflow: 'hidden', width: '100%',
            marginTop: '2rem'
        }}>
            <div style={{ position: 'absolute', top: '50%', left: `calc(50% - 395px)`, zIndex: 1 }}>
                <Button onClick={goLeft}>{"<"}</Button>
            </div>
            <div style={{ position: 'absolute', top: '50%', right: `calc(50% - 395px)`, zIndex: 1 }}>
                <Button onClick={goRight}>{">"}</Button>
            </div>
            <div
                style={{
                    display: 'flex',
                    transition: 'transform 0.5s ease',
                    transform: `translateX(-${785}px + ${offset}px)`,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {displayedImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`carousel-${index}`}
                        draggable="false"
                        onDragStart={handleDragStart}
                        style={{
                            width: '785px',
                            height: '318px',
                            margin: '0 10px',
                            borderRadius: '1rem'
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;















