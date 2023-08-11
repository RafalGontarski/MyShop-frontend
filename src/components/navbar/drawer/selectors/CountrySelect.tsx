import React from 'react';
import {
    Select,
    MenuItem,
    ListItemIcon,
    Typography,
    OutlinedInput
}
    from '@mui/material';
import Box from '@mui/material/Box';
import {SelectorFormControlStyle} from "./selectors.styles";

import PolishFlag from '../../../../resources/flags/polandFlag.png';
import UnitedKingdomFlag from '../../../../resources/flags/unitedKingdomFlag.png';
import DeutschlandFlag from '../../../../resources/flags/deutschlandFlag.png';
import FranceFlag from '../../../../resources/flags/franceFlag.png';
import ItalianFlag from '../../../../resources/flags/italyFlag.png';
import UcraineFlag from '../../../../resources/flags/ucraineFlag.png';


type CountrySelectProps = {
    onChange: (event: { target: { value: React.SetStateAction<string>; }; }) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({ onChange }) => {
    const [country, setCountry] = React.useState('Polska');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setCountry(event.target.value);
        onChange(event);
    };

    const getFlagIcon = (countryName: any) => {
        switch (countryName) {
            case 'Polska':
                return <img src={PolishFlag} alt="Flag" width="26" height="20"/>;
            case 'Niemcy':
                return <img src={DeutschlandFlag} alt="Flag" width="26" height="20"/>;
            case 'Francja':
                return <img src={FranceFlag} alt="Flag" width="26" height="20"/>;
            default:
                return null;
        }
    };

    return (
        <SelectorFormControlStyle
            variant="outlined"
            fullWidth
            margin="normal">
            <Select
                label="Kraj"
                value={country}
                onChange={handleChange}
                fullWidth
                sx={{
                    width: '350px',
                    height: '40px',
                    '&:hover': { backgroundColor: '#fff' },
                    '& .MuiOutlinedInput-root': {
                        fontFamily: 'Arial, sans-serif',
                        '&.Mui-focused fieldset': {
                            borderColor: '#000000',
                            borderWidth: '1px',
                        },
                        '&:hover fieldset': {
                            borderColor: '#000000',
                            borderWidth: '1px',
                        },
                    },
                    '& .MuiInputLabel-root': {
                        fontSize: '12px',
                        transform: 'translate(14px, 12px) scale(1)', // Adjust this value to center the label
                        '&.Mui-focused': {
                            color: '#000000', // Change this to the color you want
                            fontSize: '12px',
                        },
                    },
                    '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
                        transform: 'translate(18px, -5px) scale(0.7)', // Adjust this value to center the label
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                        // borderColor: '#000000', // This will change the default border color
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#000000', // This will change the border color on hover
                        borderWidth: '1px',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#000000', // This will change the border color when the Select is focused
                        borderWidth: '1px',
                    },
                    '& .MuiSelect-select': {
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '12px',
                        color: '#000000', // This will change the color of the selected option
                        '&:hover, &.Mui-focused': {
                            color: '#000000', // This will change the color on hover and focus
                        },
                    },
                    '& .MuiMenuItem-root': {
                        fontFamily: 'Arial, sans-serif',
                        fontSize: '12px',
                        color: '#808080', // This will change the color of the menu options
                        '&:hover': {
                            color: '#000000', // This will change the color on hover
                        },
                    },
                }}
                renderValue={(selectedValue) => (
                    <Box display="flex" alignItems="center">
                        {getFlagIcon(selectedValue)}
                        <Typography variant="inherit" sx={{ marginLeft: 1 }}>
                            {selectedValue}
                        </Typography>
                    </Box>
                )}
                input={
                    <OutlinedInput
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                fontFamily: 'Arial, sans-serif',
                                '&.Mui-focused fieldset': {
                                    borderColor: '#000000',
                                    borderWidth: '1px',
                                },
                            },
                        }}
                    />
                }
            >
                <MenuItem
                    value="Polska"
                    sx={{
                        '& .MuiTypography-root': {
                            fontSize: '13px', // Ustaw rozmiar czcionki
                        },
                        '&.Mui-focused': {
                            backgroundColor: '#808080', // Ustaw kolor tła w stanie focused na szary
                        },
                    }}
                >
                    <ListItemIcon>
                        <img src={PolishFlag} alt="Flag" width="26" height="20"/>
                    </ListItemIcon>
                    <Typography variant="inherit">Polska</Typography>
                </MenuItem>
                <MenuItem
                    value="Niemcy"
                    sx={{
                        '& .MuiTypography-root': {
                            fontSize: '13px', // Ustaw rozmiar czcionki
                        },
                        '&.Mui-focused': {
                            backgroundColor: '#d3d3d3', // Ustaw kolor tła w stanie focused na szary
                        },
                    }}
                >
                    <ListItemIcon>
                        <img src={DeutschlandFlag} alt="Flag" width="26" height="20"/>
                    </ListItemIcon>
                    <Typography variant="inherit">Niemcy</Typography>
                </MenuItem>
                <MenuItem
                    value="Francja"
                    sx={{
                        '& .MuiTypography-root': {
                            fontSize: '13px', // Ustaw rozmiar czcionki
                        },
                        '&.Mui-focused': {
                            backgroundColor: '#d3d3d3', // Ustaw kolor tła w stanie focused na szary
                        },
                    }}
                >
                    <ListItemIcon>
                        <img src={FranceFlag} alt="Flag" width="26" height="20"/>
                    </ListItemIcon>
                    <Typography variant="inherit">Francja</Typography>
                </MenuItem>
            </Select>
        </SelectorFormControlStyle>
    );
}

export default CountrySelect;
