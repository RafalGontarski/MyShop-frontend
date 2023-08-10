import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from '@mui/material';
import CountrySelector from './selectors/CountrySelect';

import CustomButton from '../../buttons/button/Button';
import CustomLink from '../../links/link/CustomLink';
import {useTranslation} from "react-i18next";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserRegistrationData} from "../../../models/api/UserRegistrationData";
import {UserApi} from "../../../api/UserApi";
import {toast} from "react-toastify";

type DrawerProps = {
    open: boolean;
    onClose: () => void;
    onLoginClick: () => void;
};


export const RegistrationDrawer: React.FC<DrawerProps> = ({ open, onClose, onLoginClick }) => {
    const { t } = useTranslation();
    const [company, setCompany] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
    const [isDataValid, setIsDataValid] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        try{
            let user: UserRegistrationData = {
                company: company,
                firstName: firstName,
                lastName: lastName,
                address: address,
                postalCode: postalCode,
                city: city,
                country: country,
                email: email,
            }
            UserApi.registerUser(user).then(r => {
            })
            toast.success("Poprawnie zarejestrowano");
            navigate("/login");
        }catch (error){
            toast.error("Bład serwera")
        }
    }
    useEffect(() => {
        setIsEmailValid(validateEmail(email));
        setIsDataValid(isEmailValid);
    }, [firstName, lastName, email, isEmailValid ]);

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const onCompanyChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCompany(event.target.value)
    }

    const onFirstnameChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFirstName(event.target.value)
    }

    const onLastnameChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setLastName(event.target.value)
    }

    const onAddressChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setAddress(event.target.value)
    }

    const onPostalCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setPostalCode(event.target.value)
    }

    const onCityChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCity(event.target.value)
    }

    const onCountryChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setCountry(event.target.value);
    }

    const onEmailChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setEmail(event.target.value)
    }


    return (
        <Drawer
            anchor={'right'}
            open={open}
            onClose={onClose}
        >
            <Box
                sx={{ width: 420, padding: 2 }}
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
                            fontWeight: 'bold' }} />
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
                        <Typography
                            variant="h4"
                            gutterBottom
                            style={{ fontWeight: 'bold' }}>
                            {t('registrationDrawer.createAccount')}
                        </Typography>
                    </Box>

                    <TextField
                        size={"small"}
                        onChange={onCompanyChange}
                        label={t('registrationDrawer.companyInstitution')}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        helperText={t('registrationDrawer.optional')}
                        FormHelperTextProps={{
                            style: {
                                textAlign: 'right',
                                marginTop: '-27px',
                                fontSize: '0.6rem',
                                color: '#808080', // Ustawienie koloru tekstu na biały
                                // backgroundColor: '#d3d3d3', // Ustawienie tła na jasnoszary
                                // padding: '2px 5px', // Dodanie wewnętrznego marginesu dla lepszego wyglądu
                                // borderRadius: '3px', // Dodanie zaokrąglenia rogów dla lepszego wyglądu
                                // width: 'auto', // Aby tło nie rozciągało się na całą szerokość
                                display: 'inline-block' // Aby tło dostosowywało się do szerokości tekstu
                            }
                        }}
                        sx={{
                            width: '350px',
                            '&:hover': { backgroundColor: '#fff' },
                            '&:focus': { backgroundColor: '#fff' },
                            '& .MuiOutlinedInput-root': {
                                fontFamily: 'Arial, sans-serif',
                                '&.Mui-focused fieldset': {
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
                        }}
                    />

                    <TextField
                        size={"small"}
                        onChange={onFirstnameChange}
                        label={t('registrationDrawer.firstName')}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{
                            marginTop: '1.8rem',
                            width: '350px',
                            '&:hover': { backgroundColor: '#fff' },
                            '&:focus': { backgroundColor: '#fff' },
                            '& .MuiOutlinedInput-root': {
                                fontFamily: 'Arial, sans-serif',
                                '&.Mui-focused fieldset': {
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
                        }}
                    />

                    <TextField
                        size={"small"}
                        onChange={onLastnameChange}
                        label={t('registrationDrawer.lastName')}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{
                            width: '350px',
                            '&:hover': { backgroundColor: '#fff' },
                            '&:focus': { backgroundColor: '#fff' },
                            '& .MuiOutlinedInput-root': {
                                fontFamily: 'Arial, sans-serif',
                                '&.Mui-focused fieldset': {
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
                        }}
                    />

                    <TextField
                        size={"small"}
                        onChange={onAddressChange}
                        label={t('registrationDrawer.streetAndNumber')}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{
                            width: '350px',
                            '&:hover': { backgroundColor: '#fff' },
                            '&:focus': { backgroundColor: '#fff' },
                            '& .MuiOutlinedInput-root': {
                                fontFamily: 'Arial, sans-serif',
                                '&.Mui-focused fieldset': {
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
                        }}
                    />

                    <TextField
                        size={"small"}
                        onChange={onPostalCodeChange}
                        label={t('registrationDrawer.postalCode')}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{
                            width: '350px',
                            '&:hover': { backgroundColor: '#fff' },
                            '&:focus': { backgroundColor: '#fff' },
                            '& .MuiOutlinedInput-root': {
                                fontFamily: 'Arial, sans-serif',
                                '&.Mui-focused fieldset': {
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
                        }}
                    />

                    <TextField
                        size={"small"}
                        onChange={onCityChange}
                        label={t('registrationDrawer.city')}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{
                            width: '350px',
                            '&:hover': { backgroundColor: '#fff' },
                            '&:focus': { backgroundColor: '#fff' },
                            '& .MuiOutlinedInput-root': {
                                fontFamily: 'Arial, sans-serif',
                                '&.Mui-focused fieldset': {
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
                        }}
                    />

                    <CountrySelector onChange={onCountryChange}/>


                    <TextField
                        size={"small"}
                        onChange={onEmailChange}
                        label={t('registrationDrawer.email')}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        sx={{
                            width: '350px',
                            '&:hover': { backgroundColor: '#fff' },
                            '&:focus': { backgroundColor: '#fff' },
                            '& .MuiOutlinedInput-root': {
                                fontFamily: 'Arial, sans-serif',
                                '&.Mui-focused fieldset': {
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
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'centre',
                        }}
                    >
                        <Typography
                            variant="body1"
                            gutterBottom
                            style={{
                                textAlign: 'center',
                                fontSize: '10px',
                            }}
                        >
                            {t('registrationDrawer.postRegistrationInfo')}
                        </Typography>
                    </Box>

                    <CustomButton label={t('registrationDrawer.createAccountButton')}/>

                </Box>

                <Typography
                    variant="body1"
                    gutterBottom
                    style={{
                        textAlign: 'center',
                        marginTop: '20px',
                    }}>
                    {t('registrationDrawer.previousShoppingQuestion')}
                </Typography>
                <CustomLink
                    href={"#"}
                    label={t('registrationDrawer.login')}
                    onClick={onLoginClick}/>
            </Box>
        </Drawer>
    );
}