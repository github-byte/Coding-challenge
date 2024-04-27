import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import { Close } from '@mui/icons-material'
import { lime } from '@mui/material/colors'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'

const Modal = ({ open = false, handleClose = () => { }, title = '', modalContent = null, showActionBtn = false }, props) => {
    const theme = useTheme();
    let textColor = theme.palette.mode === 'light' ? theme.palette.text.secondary : theme.palette.text.primary
    return (
        <Dialog {...props} open={open} onClose={handleClose} aria-labelledby={"edit-modal"}>
            <DialogTitle id={"edit"}>
                <Box display={"flex"} gap={20} justifyContent={"space-between"}>
                    <Typography variant="h5" sx={{ color: textColor, fontFamily: "Poppins" }}>{title}</Typography>
                    <Box onClick={handleClose} sx={{ cursor: "pointer", borderRadius: "8px" }}>
                        <Close sx={{ color: lime[500] }} />
                    </Box>
                </Box>
            </DialogTitle>
            <DialogContent>
                <DialogContentText sx={{ color: textColor }}>
                    {modalContent}
                </DialogContentText>
            </DialogContent>
            {showActionBtn && <DialogActions>
                <Button
                    onClick={handleClose}
                    color="primary"
                >
                    Cancel
                </Button>
            </DialogActions>}
        </Dialog>
    )

}

export default Modal;