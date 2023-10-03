import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import {ProfilePageWelcome} from "../profileEditPanel/ProfileEditPanel.styles";

export const DefaultNavClickData: React.FC<{
    linkClicks: {
        service: number,
        contact: number,
        about: number,
        hotDeals: number,
        newest: number,
        topSeller: number,
        occasions: number
        } }> = ({
        linkClicks
        }) => (
    <ProfilePageWelcome>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nazwa przycisku</TableCell>
                        <TableCell align="right">Ilość kliknięć</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align={"center"} component="th" scope="row">
                            Serwis
                        </TableCell>
                        <TableCell align="center">{linkClicks.service}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"} component="th" scope="row">
                            Kontakt
                        </TableCell>
                        <TableCell align="center">{linkClicks.contact}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"} component="th" scope="row">
                            O nas
                        </TableCell>
                        <TableCell align="center">{linkClicks.about}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"} component="th" scope="row">
                            Hot Deals
                        </TableCell>
                        <TableCell align="center">{linkClicks.hotDeals}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"} component="th" scope="row">
                            Nowości
                        </TableCell>
                        <TableCell align="center">{linkClicks.newest}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"} component="th" scope="row">
                            Top-Seller
                        </TableCell>
                        <TableCell align="center">{linkClicks.topSeller}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"} component="th" scope="row">
                            Okazje
                        </TableCell>
                        <TableCell align="center">{linkClicks.occasions}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </ProfilePageWelcome>
);
