import React, { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Box } from '@mui/system';
import CustomButton from "../../buttons/button/Button";
import { IconButton } from '@mui/material';
import CurrencySelector from "./selectors/CurrencySelector";
import CountryLink from "../../links/link/CountryLink";
import FlagCountryLink from "../../links/link/FlagCountryLink";
import Grid from '@mui/material/Grid';

import PolishFlag from '../../../resources/flags/polandFlag.png';
import UnitedKingdomFlag from '../../../resources/flags/unitedKingdomFlag.png';
import DeutschlandFlag from '../../../resources/flags/deutschlandFlag.png';
import FranceFlag from '../../../resources/flags/franceFlag.png';
import ItalianFlag from '../../../resources/flags/italyFlag.png';
import UcraineFlag from '../../../resources/flags/ucraineFlag.png';


import { useTranslation } from 'react-i18next';
import i18n from '../../../i18n';

type CurrencyMap = {
    [key: string]: string;
};

const currencyMapping: CurrencyMap = {
    "PLN · zł · Polish złoty": "zł",
    "EUR · € · Euro": "€",
    "USD · $ · Dolar": "$",
    "GPB · £ · British pound": "£",
    "UAH · ₴ · Hrywna": "₴"
};

type DrawerProps = {
    open: boolean;
    onClose: () => void;
    onLanguageChange: (lang: string) => void;
    onCountryChange: (lang: string) => void;
    onCurrencyChange?: (currencySymbol: string) => void;
};

export const LanguageDrawer: React.FC<DrawerProps> = ({ open, onClose, onLanguageChange, onCountryChange, onCurrencyChange }) => {

    const [selectedCountry, setSelectedCountry] = useState("Polska");
    const [selectedLanguage, setSelectedLanguage] = useState("Polska");
    const [selectedCurrencyValue, setSelectedCurrencyValue] = useState<string>('PLN · zł · Polish złoty');
    const { t } = useTranslation();

    const handleSave = () => {
        // onCurrencyChange(selectedCurrency.short);

        switch (selectedCountry) {
            case "Poland":
                onCountryChange('pl');
                break;
            case "England":
                onCountryChange('en');
                break;
            case "France":
                onCountryChange('fr');
                break;
            case "Italy":
                onCountryChange('it');
                break;
            case "Germany":
                onCountryChange('de');
                break;
            case "Ukraine":
                onCountryChange('ua');
                break;
            default:
                onCountryChange('pl');
        }


        switch (selectedLanguage) {
            case "Poland":
                i18n.changeLanguage('pl');
                onLanguageChange('PL');
                break;
            case "England":
                i18n.changeLanguage('en');
                onLanguageChange('EN');
                break;
            case "France":
                i18n.changeLanguage('fr');
                onLanguageChange('FR');
                break;
            case "Italy":
                i18n.changeLanguage('it');
                onLanguageChange('IT');
                break;
            case "Germany":
                i18n.changeLanguage('de');
                onLanguageChange('DE');
                break;
            case "Ukraine":
                i18n.changeLanguage('ua');
                onLanguageChange('UA');
                break;
            // Dodaj tutaj inne przypadki dla innych krajów
            default:
                i18n.changeLanguage('en');
        }
        onClose();
    };

    const updateSelectedCurrencyValue = (currencySymbol: string) => {
        const selectedValue = Object.keys(currencyMapping).find(key => currencyMapping[key] === currencySymbol);
        if (selectedValue) {
            setSelectedCurrencyValue(selectedValue);
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
                            {`${t('languageDrawer.country')}`}
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
                                        label={t(`countriesFlag.Poland`)}
                                        selected={selectedCountry === "Poland"}
                                        onClick={() => setSelectedCountry("Poland")}
                                        flag={PolishFlag}/>

                                    <FlagCountryLink
                                        href={"#"}
                                        label={t(`countriesFlag.Germany`)}
                                        selected={selectedCountry === "Germany"}
                                        onClick={() => setSelectedCountry("Germany")}
                                        flag={DeutschlandFlag}/>

                                    <FlagCountryLink
                                        href={"#"}
                                        label={t(`countriesFlag.Ukraine`)}
                                        selected={selectedCountry === "Ukraine"}
                                        onClick={() => setSelectedCountry("Ukraine")}
                                        flag={UcraineFlag}/>
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
                                        label={t(`countriesFlag.England`)}
                                        selected={selectedCountry === "England"}
                                        onClick={() => setSelectedCountry("England")}
                                        flag={UnitedKingdomFlag} />

                                    <FlagCountryLink
                                        href={"#"}
                                        label={t(`countriesFlag.Italy`)}
                                        selected={selectedCountry === "Italy"}
                                        onClick={() => setSelectedCountry("Italy")}
                                        flag={ItalianFlag}/>
                                    <FlagCountryLink
                                        href={"#"}
                                        label={t(`countriesFlag.France`)}
                                        selected={selectedCountry === "France"}
                                        onClick={() => setSelectedCountry("France")}
                                        flag={FranceFlag}/>
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
                            {`${t('languageDrawer.language')}`}
                        </Typography>
                    </Box>

                    <Grid item xs={6}>
                        <Box sx={{
                            flexDirection: 'column',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'}}>

                            <CountryLink
                                label={t(`countriesFlag.Poland`)}
                                selected={selectedLanguage === "Poland"}
                                onClick={() => setSelectedLanguage("Poland")}
                            />
                            <CountryLink
                                label={t(`countriesFlag.England`)}
                                selected={selectedLanguage === "England"}
                                onClick={() => setSelectedLanguage("England")}
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
                                label={t(`countriesFlag.Germany`)}
                                selected={selectedLanguage === "Germany"}
                                onClick={() => setSelectedLanguage("Germany")}
                            />
                            <CountryLink
                                label={t(`countriesFlag.Italy`)}
                                selected={selectedLanguage === "Italy"}
                                onClick={() => setSelectedLanguage("Italy")}
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
                                label={t(`countriesFlag.Ukraine`)}
                                selected={selectedLanguage === "Ukraine"}
                                onClick={() => setSelectedLanguage("Ukraine")}
                            />
                            <CountryLink
                                label={t(`countriesFlag.France`)}
                                selected={selectedLanguage === "France"}
                                onClick={() => setSelectedLanguage("France")}
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
                            {`${t('languageDrawer.currency')}`}
                        </Typography>
                    </Box>

                    <CurrencySelector
                        selectedValue={selectedCurrencyValue}
                        onCurrencyChange={(currencySymbol) => {
                            if (onCurrencyChange) {
                                onCurrencyChange(currencySymbol);
                            }
                            updateSelectedCurrencyValue(currencySymbol);
                        }}
                    />



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

