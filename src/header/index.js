import React from 'react'
import { Box, Typography, useTheme } from '@mui/material';
import { Toggle } from '../customComponent/toggle';
import { useSelector } from 'react-redux';
import { handeToggleState } from '../store/slices/storeView';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
// import { useTheme } from '@emotion/react';

const Navbar = ({ colorMode = {} }) => {
    console.log("inside color toglle", colorMode)
    // const theme = useTheme();
    const { toggleState = false } = useSelector((state) => state.storeView)
    const changeTheme = () => {
        colorMode.toggleColorMode()
    }
    const theme = useTheme();
    return (
        <>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box sx={{ color: "white", cursor: "pointer" }} onClick={changeTheme}>
                    <NightlightRoundIcon sx={{color: theme.palette.mode === "dark" ? theme.palette.text.primary : theme.palette.text.secondary}} />
                </Box>
                <Box display="flex" alignItems="center">
                    <Typography variant="body1">Admin</Typography>
                    <Toggle checked={toggleState} onChange={(e) => handeToggleState(!toggleState)} />
                    <Typography variant="body1">User</Typography>
                    {/* <Box ml={2}>Logout</Box> */}
                </Box>
            </Box>
        </>
    )

}

export default Navbar;