import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import {ProfilePageWelcome} from "../profileEditPanel/ProfileEditPanel.styles";
import {StyledPaper} from "./AnalyticalData.styles";
import {LinkClicksState} from "../../../models/providers/ClickProvider";

export const CategoryNavClickData: React.FC<{
    linkClicks: LinkClicksState }> = ({ linkClicks }) => (


        <ProfilePageWelcome>
        <TableContainer component={StyledPaper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Nazwa przycisku</TableCell>
                        <TableCell align="center">Ilość kliknięć</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align={"center"} component="th" scope="row">
                            Szczupak
                        </TableCell>
                        <TableCell align="center">{linkClicks.pike}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"} component="th" scope="row">
                            Sandacz
                        </TableCell>
                        <TableCell align="center">{linkClicks.zander}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"} component="th" scope="row">
                            Okoń
                        </TableCell>
                        <TableCell align="center">{linkClicks.perch}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"} component="th" scope="row">
                            Sum
                        </TableCell>
                        <TableCell align="center">{linkClicks.catfish}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"} component="th" scope="row">
                            Boleń
                        </TableCell>
                        <TableCell align="center">{linkClicks.asp}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"} component="th" scope="row">
                            Kleń
                        </TableCell>
                        <TableCell align="center">{linkClicks.chub}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"} component="th" scope="row">
                            Jaź
                        </TableCell>
                        <TableCell align="center">{linkClicks.goFish}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"} component="th" scope="row">
                            Pstrąg
                        </TableCell>
                        <TableCell align="center">{linkClicks.trout}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"} component="th" scope="row">
                            Troć
                        </TableCell>
                        <TableCell align="center">{linkClicks.seaTrout}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"} component="th" scope="row">
                            Karp
                        </TableCell>
                        <TableCell align="center">{linkClicks.carp}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"} component="th" scope="row">
                            Amur
                        </TableCell>
                        <TableCell align="center">{linkClicks.grassCarp}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"} component="th" scope="row">
                            Jesiotr
                        </TableCell>
                        <TableCell align="center">{linkClicks.sturgeon}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align={"center"} component="th" scope="row">
                            Podlodowe
                        </TableCell>
                        <TableCell align="center">{linkClicks.underwater}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </ProfilePageWelcome>
);
