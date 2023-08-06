import React from 'react';
import Link from '@mui/material/Link';

interface CustomLinkProps {
    label: string;
    onClick?: () => void; // Oznacza, że onClick jest opcjonalny
}

const CountryLink: React.FC<CustomLinkProps> = ({ label, onClick }) => {
    return (
        <Link
            href="#"
            style={{
                color: '#000',
                textDecoration: 'none',
                fontSize: '0.8rem' }}
            underline="none"
            onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
            onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
            onClick={onClick}
        >
            {label}
        </Link>
    );
};

export default CountryLink;



