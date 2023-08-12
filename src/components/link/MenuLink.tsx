import React from 'react';
import { MenuCat } from './menuLink.styles';

interface CustomLinkProps {
    href: string;
    label: string;
    onClick?: () => void; // Oznacza, że onClick jest opcjonalny
}

const MenuLink: React.FC<CustomLinkProps> = ({ href, label, onClick }) => {
    return (
        <MenuCat
            href={href}
            variant="body1"
            underline="none" // Usunięcie domyślnego podkreślenia
            onClick={onClick}
        >
            {label}
        </MenuCat>
    );
};

export default MenuLink;