import React from 'react';
import FlagIcon from '@mui/icons-material/Flag';
import CheckIcon from '@mui/icons-material/Check';
import { FlagCountry } from './links.styles';

interface FlagCountryLinkProps {
    href: string,
    label: string;
    selected: boolean;
    onClick?: () => void;
    flag: string;
}

const FlagCountryLink: React.FC<FlagCountryLinkProps> = ({ href, label, selected, onClick, flag }) => {
    return (
        <FlagCountry
            href={href}
            underline="none"
            onMouseOver={(event) => {event.currentTarget.style.color = '#008000'}}
            onMouseOut={(event) => {event.currentTarget.style.color = '#000'}}
            onClick={onClick}
        >
            <img src={flag} alt="Flag" width="32" height="24"/>
            {label}
            {selected && <CheckIcon />}
        </FlagCountry>
    );
};


export default FlagCountryLink;



