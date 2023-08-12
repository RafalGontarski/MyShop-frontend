// links.styles.ts
import styled from 'styled-components';
import Link from '@mui/material/Link';

export const FlagCountry = styled(Link)`
    color: #000;
    text-decoration: none;
    font-size: 0.9rem;
    margin-top: 0.5rem;
    display: flex; // Używamy flexboxa
    align-items: center; // Wyśrodkowanie poziome
    gap: 8px; // Odstęp między elementami wewnątrz flexboxa
    '&:hover': {
        color: #008000;
    },
`;

export const Country = styled(Link)`
    color: #000;
    text-decoration: none;
    font-size: 0.9rem;
    display: flex; // Używamy flexboxa
    align-items: center; // Wyśrodkowanie poziome
    gap: 8px;
    margin-top: 0.5rem;
`;

export const Custom = styled(Link)`
    display: block;
    text-align: center;
    text-decoration: none;
    position: relative;
    width: fit-content;
    margin: 0 auto;
    color: #000000;

    &:hover {
        color: #008000;
    }

    &::after {
        content: "";
        position: absolute;
        bottom: -6px;
        left: 0;
        right: auto;
        width: 100%;
        height: 1px;
        background-color: #000000;
        transform: scaleY(0.5);
        transition: transform 0.15s ease, bottom 0.15s ease;
    }

    &:hover::after {
        bottom: -1px;
        color: #008000;
    }
`;

// export const MenuCat = styled(Link)`
//     display: block;
//     text-align: center;
//     text-decoration: none;
//     position: relative;
//     width: fit-content;
//     //margin: 0 auto;
//     margin-right: 30px;
//     color: #000000;
//
//     &:hover {
//         color: #008000;
//     }
//
//     &::after {
//         content: "";
//         position: absolute;
//         bottom: -6px;
//         left: 0;
//         right: auto;
//         width: 100%;
//         height: 1px;
//         background-color: #000000;
//         transform: scaleY(0.5);
//         transition: transform 0.15s ease, bottom 0.15s ease;
//     }
//
//     &:hover::after {
//         bottom: -1px;
//         color: #008000;
//     }
// `;
