import styled from "styled-components";
import {Link} from "react-router-dom";



export const HeaderContainer = styled.div`
    && {
      //background-color: black; // Tymczasowo czarne tło
      background-color: rgba(0, 0, 0, 0.5);
      //position: relative;
      padding: 20px;
      color: white;
      
      @media (max-width: 940px) {
        
      }
    }
`;

export const SubCatHeaderContainer = styled.div`
    background-color: white; // Tymczasowo czarne tło
    padding: 20px;
    color: white;
`;

export const BreadcrumbContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

  @media (max-width: 940px) {
    display: none;
  }
  
`;

export const Breadcrumbs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    > a {
      position: relative;
      margin-right: 0.1px;
      color: white;
      text-decoration: none;
      height: 2rem;
      padding: 0 15px; // dodałem padding, aby tekst nie był za blisko krawędzi
      background-color: #686868;
      //background-image: linear-gradient(to right, transparent 0%, darkgrey 10%, darkgrey 90%, transparent 100%);
      border-radius: 0.2rem;
      clip-path: polygon(97.5% 0, 100% 50%, 97.5% 100%, 0% 100%, 2.5% 50%, 0% 0);
      transition: background-color 0.3s;

      &:first-child {
        border-radius: 0.2rem;
        clip-path: polygon(90% 0, 100% 50%, 90% 100%, 0% 100%, 0% 0%, 0% 0);
      }
      
      &:nth-child(3) {
        border-radius: 0.2rem;
        clip-path: polygon(95% 0, 100% 50%, 95% 100%, 0% 100%, 5% 50%, 0% 0);
      }
      

        &:hover {
          background-color: #909090;
        }
    }
`;

export const StyledLink = styled(Link)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    
    
  }
`

export const StyledOtherLink = styled(Link)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    text-decoration: none;

    @media (max-width: 600px) {
      font-weight: bold;
      font-size: 0.8rem;
    }
    
  }
`

export const SubCatBreadcrumbs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > a {
    position: relative;
    margin-right: 0.1px;
    color: white;
    text-decoration: none;
    height: 2rem;
    padding: 0 15px; // dodałem padding, aby tekst nie był za blisko krawędzi
    background-color: #686868;
    //background-image: linear-gradient(to right, transparent 0%, darkgrey 10%, darkgrey 90%, transparent 100%);
    border-radius: 0.2rem;
    clip-path: polygon(97.5% 0, 100% 50%, 97.5% 100%, 0% 100%, 2.5% 50%, 0% 0);
    transition: background-color 0.3s;

    &:first-child {
      border-radius: 0.2rem;
      clip-path: polygon(90% 0, 100% 50%, 90% 100%, 0% 100%, 0% 0%, 0% 0);
    }

    &:nth-child(3) {
      border-radius: 0.2rem;
      clip-path: polygon(95% 0, 100% 50%, 95% 100%, 0% 100%, 5% 50%, 0% 0);
    }


    &:hover {
      background-color: #909090;
    }
  }
`;

export const SubCatSpan = styled.span`
  color: black;
`

export const CategoryName = styled.h1`
    text-align: left;
    margin: 20px 0;
    font-size: 48px;
  
  @media (max-width: 940px) {
    font-size: 38px;
    margin-top: 0;
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    //font-weight: bold;
    font-size: 28px;
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

export const SubCategoryName = styled.h1`
    text-align: left;
    margin: 20px 0;
    color: black;
`;

export const ActionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;



export const LinksContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const InnerContainer = styled.div`
    //margin-left: 8.7%;
    //margin-right: 8.7%;
    margin-left: 10rem;
    margin-right: 10rem;

    @media (max-width: 1350px) {
      margin-left: 4rem;
      margin-right: 4rem;
    }

    @media (max-width: 1100px) {
      margin-left: 1rem;
      margin-right: 1rem;
    }

    @media (max-width: 600px) {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
`;

export const SubCatInnerContainer = styled.div`
    //margin-left: 8.7%;
    //margin-right: 8.7%;
    margin-left: 10rem;
    margin-right: 10rem;
    border-bottom: 1px solid #e0e0e0;

    @media (max-width: 1350px) {
      margin-left: 4rem;
      margin-right: 4rem;
    }

    @media (max-width: 1100px) {
      margin-left: 1rem;
      margin-right: 1rem;
    }

    @media (max-width: 600px) {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
`;


export const ActionButton = styled.button`
    padding: 10px 20px;
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;

export const VideoBackground = styled.div`
  && {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
