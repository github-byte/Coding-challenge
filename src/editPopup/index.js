import React, { useState } from 'react'
import Modal from '../customComponent/modal'
import { Box, Typography, TextField, Button, FormLabel, useTheme } from '@mui/material'
import { lime } from '@mui/material/colors'
import { getPrice } from '../utils'
import { useSelector } from 'react-redux'
import { updateData } from '../store/slices/admin'
import useStyles from './styles'

const EditModalBody = ({ editContent = {}, handleClose }) => {
    console.log("in modal2323", editContent)
    const classes = useStyles()
    const theme = useTheme();
    let textColor = theme.palette.mode === 'light' ? theme.palette.text.secondary : theme.palette.text.primary
    let { data = [] } = useSelector((state) => state.admin)
    const { name = '', category = '', price = '', quantity = '', value = '', index = 0, disabled = false } = editContent || {}
    const [formData, setFormData] = useState({ category, price: getPrice(price), quantity, value: getPrice(value), disabled })
    const handleEdit = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }
    const handleSave = () => {
        let updateFormData = [...data]
        if (updateFormData[index]) {
            updateFormData[index] = { ...formData, name, price: `$${formData?.price}`, value: `$${formData?.value}` }
        }
        updateData(updateFormData)
        handleClose()
    }
    return (
        <>
            <Box>
                <Typography color={textColor} variant="body1">{name}</Typography>
            </Box>
            <Box mt={2}>
                <Box display="flex" rowGap={2}>
                    <Box mt={1} mr={1}>
                        <FormLabel sx={{ color: textColor, fontSize: 12, pl: 1 }}>Category</FormLabel>
                        <TextField
                            id="category"
                            className={classes.textFields}
                            value={formData?.category}
                            sx={{color:textColor}}
                            onChange={handleEdit}

                        />
                    </Box>
                    <Box mt={1}>
                        <FormLabel sx={{ color: textColor, fontSize: 12, pl: 1 }}>Price</FormLabel>
                        <TextField
                            id="price"
                            className={classes.textFields}
                            value={formData?.price}
                            onChange={handleEdit}
                            sx={{color:textColor}}

                        />
                    </Box>
                </Box>
                <Box display="flex" mt={1} rowGap={2}>
                    <Box mr={1} mt={1}>
                        <FormLabel sx={{ color: textColor, fontSize: 12, pl: 1 }}>Quantity</FormLabel>
                        <TextField
                            className={classes.textFields}
                            id="quantity"
                            value={formData?.quantity}
                            onChange={handleEdit}
                            sx={{color:textColor}}
                        />
                    </Box>
                    <Box mt={1}>
                        <FormLabel sx={{ color: textColor, fontSize: 12, pl: 1 }}>Value</FormLabel>
                        <TextField
                            id="value"
                            className={classes.textFields}
                            value={formData?.value}
                            onChange={handleEdit}
                            sx={{color:textColor}}
                        />
                    </Box>
                </Box>
            </Box>
            <Box mt={2} gap={2} display="flex" justifyContent="flex-end">
                <Button sx={{ color: lime[500], textTransform: "none" }} onClick={handleClose}>Cancel</Button>
                <Button sx={{ color: lime[500], textTransform: "none" }} onClick={handleSave}>Save</Button>
            </Box>
        </>
    )
}
const EditModal = (props) => {
    const { open = false, handleClose = () => { } } = props || {}
    return (<Modal {...props} title='Edit Product' open={open} modalContent={<EditModalBody {...props} />} handleClose={handleClose} />)

}

export default EditModal;