import React from 'react';
import { FormControl, InputLabel, OutlinedInput, Select, MenuItem, ListItemIcon, Typography, InputAdornment } from '@mui/material';
import { Flag as PolandFlag, Flag as GermanyFlag, Flag as FranceFlag } from '@mui/icons-material'; // Zaimportuj odpowiednie ikony flag
import Box from '@mui/material/Box';
function CurrencySelector() {
    const [country, setCountry] = React.useState('Polska');

    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setCountry(event.target.value);
    };

    const getFlagIcon = (countryName: any) => {
        switch (countryName) {
            case 'zł':
                return <PolandFlag fontSize="small" />;
            case '$':
                return <GermanyFlag fontSize="small" />;
            case '€':
                return <FranceFlag fontSize="small" />;
            case '£':
                return <FranceFlag fontSize="small" />;
            default:
                return null;
        }
    };

    return (
        <FormControl
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{
                width: '350px',
                '&:hover': { backgroundColor: '#fff' },
                '&:focus': { backgroundColor: '#fff' },
            }}
        >
            <InputLabel
                sx={{
                    fontSize: '12px',
                    transform: 'translate(14px, 12px) scale(1)', // Adjust this value to center the label
                    '&.Mui-focused': {
                        color: '#000000', // Change this to the color you want
                        fontSize: '12px',
                    },
                }}
            >
            </InputLabel>
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
                    value="PLN · zł · Polish złoty"
                    sx={{
                        '& .MuiTypography-root': {
                            fontSize: '13px', // Ustaw rozmiar czcionki
                        },
                        '&.Mui-focused': {
                            backgroundColor: '#808080', // Ustaw kolor tła w stanie focused na szary
                        },
                    }}
                >
                    <Typography variant="inherit">PLN · zł · Polish złoty</Typography>
                </MenuItem>
                <MenuItem
                    value="EUR · € · Euro"
                    sx={{
                        '& .MuiTypography-root': {
                            fontSize: '13px', // Ustaw rozmiar czcionki
                        },
                        '&.Mui-focused': {
                            backgroundColor: '#d3d3d3', // Ustaw kolor tła w stanie focused na szary
                        },
                    }}
                >

                    <Typography variant="inherit">EUR · € · Euro</Typography>
                </MenuItem>
                <MenuItem
                    value="USD · $ · Dolar"
                    sx={{
                        '& .MuiTypography-root': {
                            fontSize: '13px', // Ustaw rozmiar czcionki
                        },
                        '&.Mui-focused': {
                            backgroundColor: '#d3d3d3', // Ustaw kolor tła w stanie focused na szary
                        },
                    }}
                >

                    <Typography variant="inherit">USD · $ · Dolar</Typography>
                </MenuItem>
                <MenuItem
                    value="GPB · £ · British pound"
                    sx={{
                        '& .MuiTypography-root': {
                            fontSize: '13px', // Ustaw rozmiar czcionki
                        },
                        '&.Mui-focused': {
                            backgroundColor: '#d3d3d3', // Ustaw kolor tła w stanie focused na szary
                        },
                    }}
                >

                    <Typography variant="inherit">GPB · £ · British pound</Typography>
                </MenuItem>

            </Select>
        </FormControl>
    );
}

export default CurrencySelector;
