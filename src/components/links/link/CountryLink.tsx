import React, { useState } from 'react';
import Link from '@mui/material/Link';
import FlagIcon from '@mui/icons-material/Flag';
import CheckIcon from '@mui/icons-material/Check';

interface CustomLinkProps {
    label: string;
    selected: boolean;
    onClick?: () => void;
}

const CountryLink: React.FC<CustomLinkProps> = ({ label, selected, onClick }) => {
    return (
        <Link
            href="#"
            style={{
                color: '#000',
                textDecoration: 'none',
                fontSize: '0.8rem',
                display: 'block'}}
            underline="none"
            onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
            onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
            onClick={onClick}
        >
            <FlagIcon />
            {label}
            {selected && <CheckIcon />}
        </Link>
    );
};


export default CountryLink;



