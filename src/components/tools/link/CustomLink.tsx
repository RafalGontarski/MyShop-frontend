import React from 'react';
import { Custom } from './links.styles';

interface CustomLinkProps {
    href: string;
    label: string;
    onClick?: () => void; // Oznacza, że onClick jest opcjonalny
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, label, onClick }) => {
    return (
        <Custom
            href={href}
            variant="body1"
            underline="none" // Usunięcie domyślnego podkreślenia
            onClick={onClick}
        >
            {label}
        </Custom>
    );
};

export default CustomLink;



