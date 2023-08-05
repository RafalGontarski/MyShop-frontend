import React from 'react';
import { FormControl, InputLabel, OutlinedInput, Select, MenuItem, ListItemIcon, Typography, InputAdornment } from '@mui/material';
import { Flag as PolandFlag, Flag as GermanyFlag, Flag as FranceFlag } from '@mui/icons-material'; // Zaimportuj odpowiednie ikony flag
import Box from '@mui/material/Box';
function CountrySelect() {
    const [country, setCountry] = React.useState('Polska');

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
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                label="Kraj"
                renderValue={(selectedValue) => (
                    <Box
                        display="flex"
                        alignItems="center">
                        {getFlagIcon(selectedValue)}
                        <Typography
                            variant="inherit"
                            sx={{
                                marginLeft: 1
                            }}
                        >
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
                <MenuItem value="Polska">
                    <ListItemIcon>
                        <PolandFlag fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Polska</Typography>
                </MenuItem>
                <MenuItem value="Niemcy">
                    <ListItemIcon>
                        <GermanyFlag fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Niemcy</Typography>
                </MenuItem>
                <MenuItem value="Francja">
                    <ListItemIcon>
                        <FranceFlag fontSize="small" />
                    </ListItemIcon>
                    <Typography variant="inherit">Francja</Typography>
                </MenuItem>
            </Select>
        </FormControl>
    );
}

export default CountrySelect;
