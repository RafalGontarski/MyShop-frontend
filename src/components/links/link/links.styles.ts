// links.styles.ts
import styled from 'styled-components';
import Link from '@mui/material/Link';

export const FlagCountry = styled(Link)`
    color: #000;
    text-decoration: none;
    font-size: 0.8rem;
    display: block;
    '&:hover': {
        color: #008000;
    },
    `;

export const Country = styled(Link)`
    color: #000;
    text-decoration: none;
    font-size: 0.8rem;
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
