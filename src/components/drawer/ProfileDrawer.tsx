import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import HandIcon from '@mui/icons-material/PanTool';
import CustomButton from "../button/Button";
import CustomLink from '../link/CustomLink';
import {useTranslation} from "react-i18next";
import GoogleLoginButton from '../button/GoogleLoginButton';

type DrawerProps = {
    open: boolean;
    onClose: () => void;
    onRegisterClick: () => void;
};

export const ProfileDrawer: React.FC<DrawerProps> = ({ open, onClose, onRegisterClick }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const { t } = useTranslation();
    const handleMouseDownPassword = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowPassword(true);
    };

    const handleMouseUpPassword = (event: React.MouseEvent) => {
        event.preventDefault();
        setShowPassword(false);
    };



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
                            {t('profileDrawer.greeting')}
                        </Typography>
                        <HandIcon
                            style={{ color: '#008000'}}
                        />
                    </Box>

                    <TextField
                        size={"small"}
                        label={t('profileDrawer.email')}
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
                        label={t('profileDrawer.password')}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        type={showPassword ? 'text' : 'password'}
                        sx={{
                            display: 'centre',
                            width: '350px',
                            '&:hover': { backgroundColor: '#fff' },
                            '&:focus': { backgroundColor: '#fff' },
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused fieldset': {
                                    borderColor: '#000000',
                                    borderWidth: '1px',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                fontSize: '12px',
                                transform: 'translate(14px, 12px) scale(1)', // Adjust this value to center the label
                                '&:hover': { backgroundColor: '#fff' },
                                '&.Mui-focused': {
                                    color: '#000000', // Change this to the color you want

                                },
                            },
                            '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
                                transform: 'translate(18px, -5px) scale(0.7)', // Adjust this value to center the label
                            },
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onMouseDown={handleMouseDownPassword} // Pokaż hasło
                                        onMouseUp={handleMouseUpPassword} // Ukryj hasło
                                        disableRipple
                                        sx={{
                                            '& svg': {
                                                fontSize: '1rem', // Adjust this value to change the size of the icon
                                            },
                                        }}
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>

                            ),
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignSelf: 'flex-start',
                            marginLeft: '2.25rem',
                        }}
                    >
                        <FormControlLabel
                            control={
                                <Checkbox
                                    disableRipple
                                    sx={{
                                        '& .MuiSvgIcon-root': {
                                            fontSize: '1rem',
                                        },
                                        '&.Mui-checked': {
                                            color: '#008000', // This changes the checkmark color
                                        },
                                        '& .MuiIconButton-root': {
                                            borderWidth: '0.5px',
                                            borderColor: '#000',
                                            '&:hover': {
                                                borderColor: '#000',
                                            },
                                        },
                                        '& .MuiCheckbox-colorSecondary.Mui-checked': {
                                            color: '#000', // This changes the checkmark color
                                        },
                                        '& .MuiCheckbox-colorSecondary.Mui-checked:hover': {
                                            backgroundColor: 'transparent', // This makes the checkbox transparent when checked and hovered
                                        },
                                    }}
                                />
                            }
                            label={t('profileDrawer.rememberMe')}
                            sx={{
                                '& .MuiTypography-root': {
                                    // fontFamily: 'Arial, sans-serif',
                                    marginTop: '1px',
                                    fontSize: '0.7rem'
                                    // Add other font styles as needed
                                },
                            }}
                        />
                    </Box>

                    <CustomButton label={t('profileDrawer.login')}/>

                </Box>
                <Box style={{
                    marginTop: '1rem',
                }}>
                    <CustomLink
                        href={"#"}
                        label={t('profileDrawer.forgotPassword')}
                        onClick={undefined}/>
                </Box>


                <Divider
                    style={{
                        margin: '2rem 0',
                        marginRight: '2rem',
                        marginLeft: '2rem',
                        borderWidth: '0.1rem',
                        borderColor: '#000000',
                    }}
                />

                <Typography variant="body1" gutterBottom style={{ textAlign: 'center' }}>
                    {t('profileDrawer.newHere')}
                </Typography>

                <CustomLink
                    href={"#"}
                    label={t('profileDrawer.register')}
                    onClick={onRegisterClick}/>


            </Box>
            <Box>
                {/*<GoogleLoginButton*/}
                {/*    clientId="YOUR_GOOGLE_CLIENT_ID"*/}
                {/*    onSuccess={handleSuccess}*/}
                {/*    onFailure={handleFailure}*/}
                {/*/>*/}
            </Box>
        </Drawer>
    );
}



