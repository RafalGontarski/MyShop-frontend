import styled from "styled-components";
import {Button} from "@material-ui/core";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";


export const LeftButtonContainer = styled.div`
  && {
    position: absolute;
    top: 50%; // Ustawia kontener na środku poziomo
    left: calc(50% - 395px);
    transform: translateY(-50%); // Wyśrodkowuje kontener pionowo
    z-index: 1;
  }
`;

export const RightButtonContainer = styled.div`
  && {
    position: absolute;
    top: 50%; // Ustawia kontener na środku poziomo
    right: calc(50% - 395px);
    transform: translateY(-50%); // Wyśrodkowuje kontener pionowo
    z-index: 1;
  }
`;

export const CarouselContainer = styled.div`
  && {
    position: relative;
    overflow: hidden;
    width: 100%;
    margin-bottom: 2rem;
    margin-top: 3rem;

    // Domyślnie ukryj przyciski
    ${LeftButtonContainer}, ${RightButtonContainer} {
      opacity: 0;
      transition: opacity 0.3s ease; // Płynne pojawianie się i znikanie
    }

    // Pokaż przyciski, gdy najedziesz myszką na CarouselContainer
    &:hover ${LeftButtonContainer}, &:hover ${RightButtonContainer} {
      opacity: 1;
    }

    // Ustawienie marginesów dla przycisków od rozmiaru ekranu 850px
    @media (max-width: 850px) {
      ${LeftButtonContainer} {
        left: 5%; // Ustawia lewy margines na 5%
      }

      ${RightButtonContainer} {
        right: 5%; // Ustawia prawy margines na 5%
      }
    }
  }
`;



export const CarouselBtn = styled(Button)`
  && {
    background-color: black;
    color: white;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    min-width: 0;  // Upewnij się, że domyślne style nie rozciągają przycisku
    min-height: 0; // Upewnij się, że domyślne style nie rozciągają przycisku
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 5px; // Dostosuj odstęp wewnętrzny wokół ikony

    &:hover {
      background-color: green;
    }
    
    @media (max-width: 850px) {
      display: none;
    }
    
  }
`;

export const SlimArrowRight = styled(FaArrowRight)`
  transform: scaleY(0.5); // Spłaszczanie ikony w pionie
`;

export const SlimArrowLeft = styled(FaArrowLeft)`
  transform: scaleY(0.5); // Spłaszczanie ikony w pionie
`;

export const CarouselImage = styled.img`
  && {
      pointer-events: none;
      width: 785px;
      height: 318px;
      margin: 0 10px;
      border-radius: 1rem;
      //draggable: false;
    
      // Procentowe zmniejszanie grafik zaczynając od rozmiaru ekranu 850px
      @media (max-width: 850px) {
        width: 70%;  // Możesz dostosować wartość procentową według potrzeb
        height: auto;  // Zachowaj proporcje obrazu
      }
  }
`;

export const CarouselImgContainer = styled.div<{ isDesktop: boolean, translateValue: number }>`
  display: flex;
  transition: ${props => props.isDesktop ? 'none' : 'transform 0.5s ease'};
  transform: translateX(${props => props.translateValue}px);
  justify-content: center;
  align-items: center;
`;






