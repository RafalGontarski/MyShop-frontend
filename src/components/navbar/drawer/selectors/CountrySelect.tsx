import React from 'react';
import {
    Select,
    MenuItem,
    ListItemIcon,
    Typography,
    OutlinedInput
}
    from '@mui/material';
import {
    Flag as PolandFlag,
    Flag as GermanyFlag,
    Flag as FranceFlag }
    from '@mui/icons-material';
import Box from '@mui/material/Box';
import {SelectorFormControlStyle} from "./selectors.styles";
function CountrySelect() {
    const [country, setCountry] = React.useState('Polska');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setCountry(event.target.value);
    };

    const getFlagIcon = (countryName: any) => {
        switch (countryName) {
            case 'Polska':
                return <PolandFlag fontSize="small" />;
            case 'Niemcy':
                return <GermanyFlag fontSize="small" />;
            case 'Francja':
                return <FranceFlag fontSize="small" />;
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
                        <PolandFlag fontSize="small" />
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
                        <GermanyFlag fontSize="small" />
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
                        <FranceFlag fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Francja</Typography>
                </MenuItem>
            </Select>
        </SelectorFormControlStyle>
    );
}

export default CountrySelect;
