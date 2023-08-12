import React from 'react';
import {Country} from "./links.styles";
import CheckIcon from "@mui/icons-material/Check";

interface CountryLinkProps {
    label: string;
    selected: boolean;
    onClick?: () => void; // Oznacza, że onClick jest opcjonalny
}

const CountryLink: React.FC<CountryLinkProps> = ({ label, selected, onClick }) => {
    return (
        <Country
            href="#"
            underline="none"
            onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
            onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
            onClick={onClick}
        >
            {label}
            {selected && <CheckIcon style={{ width: 17, height: 17 }}/>}
        </Country>
    );
};

export default CountryLink;



