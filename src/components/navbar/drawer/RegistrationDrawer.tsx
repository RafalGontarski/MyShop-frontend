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

type DrawerProps = {
    open: boolean;
    onClose: () => void;
    onLoginClick: () => void;
};




export const RegistrationDrawer: React.FC<DrawerProps> = ({ open, onClose, onLoginClick }) => {
    const { t } = useTranslation();

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
                        <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold' }}>
                            {t('registrationDrawer.createAccount')}
                        </Typography>
                    </Box>

                    <TextField
                        size={"small"}
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

                    <CountrySelector />


                    <TextField
                        size={"small"}
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