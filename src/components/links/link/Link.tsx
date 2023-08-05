import React from 'react';
import Link from '@mui/material/Link';

interface CustomLinkProps {
    label: string;
    onClick?: () => void; // Oznacza, że onClick jest opcjonalny
}

const CustomLink: React.FC<CustomLinkProps> = ({ label, onClick }) => {
    return (
        <Link
            href="#"
            variant="body2"
            style={{
                display: 'block',
                textAlign: 'center',
                textDecoration: 'none'
            }}
            underline="hover"
            sx={{
                color: '#000000',
                '&:hover': { color: '#008000' }
            }}
            onClick={onClick}
        >
            {label}
        </Link>
    );
};

export default CustomLink;
