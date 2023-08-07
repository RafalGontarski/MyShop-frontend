import React from 'react';
import FlagIcon from '@mui/icons-material/Flag';
import CheckIcon from '@mui/icons-material/Check';
import { FlagCountry } from './links.styles';

interface FlagCountryLinkProps {
    href: string,
    label: string;
    selected: boolean;
    onClick?: () => void;
}

const FlagCountryLink: React.FC<FlagCountryLinkProps> = ({ href, label, selected, onClick }) => {
    return (
        <FlagCountry
            href={href}
            underline="none"
            onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
            onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
            onClick={onClick}
        >
            <FlagIcon />
            {label}
            {selected && <CheckIcon />}
        </FlagCountry>
    );
};


export default FlagCountryLink;



