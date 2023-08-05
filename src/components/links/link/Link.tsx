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
            variant="body1"
            style={{
                display: 'block',
                textAlign: 'center',
                textDecoration: 'none',
                position: 'relative', // Pozwala na pozycjonowanie pseudoelementu
                width: 'fit-content', // Długość linku dostosowuje się do jego zawartości
                margin: '0 auto' // Wyśrodkowanie linku
            }}
            underline="none" // Usunięcie domyślnego podkreślenia
            sx={{
                color: '#000000',
                '&:hover': { color: '#008000' },
                '&::after': { // Pseudoelement reprezentujący linię pod linkiem
                    content: '""',
                    position: 'absolute',
                    bottom: '-6px',
                    left: '0',
                    right: 'auto', // Usunięcie wartości 'right', aby długość linii dostosowywała się do zawartości linku
                    width: '100%', // Szerokość linii równa szerokości linku
                    height: '1px',
                    backgroundColor: '#000000',
                    transform: 'scaleY(0.5)', // Skalowanie lini w pionie
                    transition: 'transform 0.15s ease, bottom 0.15s ease', // Dodanie efektu przejścia dla właściwości 'bottom'
                },
                '&:hover::after': {
                    // transform: 'scaleY(1)', // Przywrócenie pełnej grubości lini po najechaniu myszką
                    bottom: '-1px', // Przybliżenie linii do nazwy linku o 1rem
                    color: '#008000',
                }
            }}
            onClick={onClick}
        >
            {label}
        </Link>
    );
};

export default CustomLink;



