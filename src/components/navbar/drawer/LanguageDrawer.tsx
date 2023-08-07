import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Box } from '@mui/system';
import CustomButton from "../../buttons/button/Button";
import { IconButton } from '@mui/material';
import CurrencySelector from "./selectors/CurrencySelector";
import { InputAdornment, Link } from "@mui/material";
import CountryLink from "../../links/link/CountryLink";
import FlagCountryLink from "../../links/link/FlagCountryLink";
import Grid from '@mui/material/Grid';

import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';



type DrawerProps = {
    open: boolean;
    onClose: () => void;
};

export const LanguageDrawer: React.FC<DrawerProps> = ({ open, onClose }) => {

    const [selectedCountry, setSelectedCountry] = useState("Polska");
    const { t } = useTranslation();

    const handleSave = () => {
        switch (selectedCountry) {
            case "Poland":
                i18n.changeLanguage('pl');
                break;
            case "England":
                i18n.changeLanguage('en');
                break;
            // Dodaj tutaj inne przypadki dla innych krajów
            default:
                i18n.changeLanguage('en');
        }
    };


    return (
        <Drawer
            anchor={'right'}
            open={open}
            onClose={onClose}
        >
            <Box
                sx={{
                    width: 420,
                    padding: 2,
                }}
                role="presentation"
            >


                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <IconButton
                        onClick={onClose}
                        disableRipple
                        sx={{
                            color: '#000000',
                            '&:hover': { color: '#008000' } }}
                    >
                        <CloseIcon style={{
                            fontSize: 30,
                            fontWeight: 'bold'
                        }} />
                    </IconButton>

                </Box>



                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'left' }}>
                        <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
                            Kraj · Country
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%' }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Box sx={{
                                    flexDirection: 'column',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'}}>
                                    <FlagCountryLink
                                        href={"#"}
                                        label={t(`countries.Poland`)}
                                        selected={selectedCountry === "Poland"}
                                        onClick={() => setSelectedCountry("Poland")} />
                                    <FlagCountryLink
                                        href={"#"}
                                        label={t(`countries.Germany`)}
                                        selected={selectedCountry === "Germany"}
                                        onClick={() => setSelectedCountry("Germany")} />
                                    <FlagCountryLink
                                        href={"#"}
                                        label={t(`countries.Ukraine`)}
                                        selected={selectedCountry === "Ukraine"}
                                        onClick={() => setSelectedCountry("Ukraine")} />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box sx={{
                                    flexDirection: 'column',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'}}>
                                    <FlagCountryLink
                                        href={"#"}
                                        label={t(`countries.England`)}
                                        selected={selectedCountry === "England"}
                                        onClick={() => setSelectedCountry("England")} />
                                    <FlagCountryLink
                                        href={"#"}
                                        label={t(`countries.Italy`)}
                                        selected={selectedCountry === "Italy"}
                                        onClick={() => setSelectedCountry("Italy")} />
                                    <FlagCountryLink
                                        href={"#"}
                                        label={t(`countries.France`)}
                                        selected={selectedCountry === "France"}
                                        onClick={() => setSelectedCountry("France")} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>



                <Divider
                    style={{
                        marginTop: '5%',
                        marginRight: '8%',
                        marginLeft: '8%',
                        borderWidth: '0.1rem',
                        borderColor: '#000000',
                    }}
                />

            </Box>

            <Box
                sx={{
                    width: 420,
                    padding: 2,
                }}
                role="presentation"
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >

                    <Box sx={{ display: 'flex', alignItems: 'left' }}>
                        <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
                            Język · Language
                        </Typography>
                    </Box>

                    <Grid item xs={6}>
                        <Box sx={{
                            flexDirection: 'column',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'}}>

                            <CountryLink
                                label={"Polska"}
                                selected={selectedCountry === "Polska"}
                                onClick={() => setSelectedCountry("Polska")}
                            />
                            <CountryLink
                                label={"Anglia"}
                                selected={selectedCountry === "Anglia"}
                                onClick={() => setSelectedCountry("Anglia")}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box sx={{
                            flexDirection: 'column',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'}}>
                            <CountryLink
                                label={"Niemcy"}
                                selected={selectedCountry === "Niemcy"}
                                onClick={() => setSelectedCountry("Niemcy")}
                            />
                            <CountryLink
                                label={"Włochy"}
                                selected={selectedCountry === "Włochy"}
                                onClick={() => setSelectedCountry("Włochy")}
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={6}>
                        <Box sx={{
                            flexDirection: 'column',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'}}>
                            <CountryLink
                                label={"Ukraina"}
                                selected={selectedCountry === "Ukraina"}
                                onClick={() => setSelectedCountry("Ukraina")}
                            />
                            <CountryLink
                                label={"Francja"}
                                selected={selectedCountry === "Francja"}
                                onClick={() => setSelectedCountry("Francja")}
                            />
                        </Box>
                    </Grid>



                </Box>

                <Divider
                    style={{
                        marginTop: '5%',
                        marginRight: '8%',
                        marginLeft: '8%',
                        borderWidth: '0.1rem',
                        borderColor: '#000000',
                    }}
                />

            </Box>

            <Box
                sx={{
                    width: 420,
                    padding: 2,
                }}
                role="presentation"
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >

                    <Box sx={{ display: 'flex', alignItems: 'left' }}>
                        <Typography variant="h5" gutterBottom style={{ fontWeight: 'bold' }}>
                            Waluta · Currency
                        </Typography>
                    </Box>

                    <CurrencySelector />


                </Box>

                <Divider
                    style={{
                        marginTop: '5%',
                        marginRight: '8%',
                        marginLeft: '8%',
                        borderWidth: '0.1rem',
                        borderColor: '#000000',
                    }}
                />

            </Box>

            <Box
                sx={{
                    width: 420,
                    padding: 2,
                }}
                role="presentation"
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >

                    <CustomButton label={t('save')} onClick={handleSave}/>

                </Box>


            </Box>

        </Drawer>
    );
}
