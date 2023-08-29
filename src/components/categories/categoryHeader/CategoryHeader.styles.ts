import styled from "styled-components";


export const HeaderContainer = styled.div`
    background-color: black; // Tymczasowo czarne tło
    padding: 20px;
    color: white;
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
`;

export const Breadcrumbs = styled.div`
    > a {
        margin-right: 5px;
        color: white;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const SubCatBreadcrumbs = styled.div`
    > a {
        margin-right: 5px;
        color: black;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const SubCatSpan = styled.span`
  color: black;
`

export const CategoryName = styled.h1`
    text-align: left;
    margin: 20px 0;
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