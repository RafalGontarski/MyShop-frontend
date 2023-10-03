import React from 'react';
import { Custom } from './links.styles';

interface CustomLinkProps {
    href: string;
    label: string;
    onClick?: () => void;
    isActive?: boolean;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, label, onClick, isActive }) => {
    return (
        <Custom
            href={href}
            variant="body1"
            underline="none" // Usunięcie domyślnego podkreślenia
            onClick={onClick}
            isActive={isActive}
        >
            {label}
        </Custom>
    );
};

export default CustomLink;



