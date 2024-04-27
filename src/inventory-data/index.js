import React, { useCallback, useEffect, useState } from 'react'
import { useSelector, dispatch } from '../store'
import useStyles from './styles';
import { getInventoryData, updateData } from '../store/slices/admin';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import EditModal from '../editPopup';
import { headCells } from '../constants';
import { green, purple, red } from '@mui/material/colors';

const InventoryData = (props) => {
    const classes = useStyles();
    let { data: storeData = [], error = "" } = useSelector((state) => state?.admin)
    let { toggleState = "" } = useSelector((state) => state?.storeView)
    const [openEdit, setOpenEdit] = useState(false)
    const [editContent, setEditContent] = useState({})
    useEffect(() => {
        getInventoryData();
    }, [])
    const handleEdit = (item, index) => {
        if(toggleState || item?.disabled) return;
        setOpenEdit(true)
        setEditContent({ ...item, index })
    }
    const handleDelete = (index) => {
        if(toggleState) return;
        let newData = [...storeData]
        newData.splice(index, 1)
        updateData(newData)
        setOpenEdit(false)
    }

    const handleViewModes = (index, item = {}, disabled = false) => {
        if(toggleState) return;
        let newDataList =  [...storeData]
        if(newDataList[index]){
            newDataList[index] = {...item, disabled: !disabled}
        }
        updateData(newDataList)
    }

    return (
        <Box mt={3}>
            {error || error == null ? <Box display="flex" justifyContent="center">
                <Typography variant="body1" color="inherit">{"Data not Found!"}</Typography>
                </Box> : <TableContainer className={classes.tableContainer}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow className={classes.borderClass}>
                            {headCells.map((headCell) => (
                                <TableCell className={`${classes.borderClass}`} key={headCell.name}>
                                    <Box className={classes.tableMainCell}>{headCell.name}</Box>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ color: "inherit" }}>
                        {storeData?.map((row, index) => {
                            const { name = '', quantity = '', value = '', price = '', category = '', disabled = true } = row
                            return (<TableRow
                                key={name}
                                sx={{ '&:last-child td, &:last-child th': { borderBottom: 0 }, '&:not-last-child td': { border: "1px solid grey" }, color: "inherit" }}
                            >
                                <TableCell className={index !== storeData?.length - 1 && classes.borderClass} sx={{ color: "inherit" }} scope="row">
                                    {name}
                                </TableCell>
                                <TableCell className={index !== storeData?.length - 1 && classes.borderClass} sx={{ color: "inherit" }} >{category}</TableCell>
                                <TableCell className={index !== storeData?.length - 1 && classes.borderClass} sx={{ color: "inherit" }} >{price}</TableCell>
                                <TableCell className={index !== storeData?.length - 1 && classes.borderClass} sx={{ color: "inherit" }} >{quantity}</TableCell>
                                <TableCell className={index !== storeData?.length - 1 && classes.borderClass} sx={{ color: "inherit" }} >{value}</TableCell>
                                <TableCell className={index !== storeData?.length - 1 && classes.borderClass} sx={{ color: "inherit" }} >
                                    <Box display={"flex"} gap={1}>
                                        <EditIcon sx={{ cursor: "pointer", color: (toggleState || disabled) ? "grey" : green[400] }} onClick={() => handleEdit(row, index)} />
                                        {!disabled ? <VisibilityIcon sx={{cursor: "pointer", color: toggleState ? "grey" : purple[200] }} onClick={() => handleViewModes(index, row, disabled)} />
                                            : <VisibilityOffIcon  sx={{cursor: "pointer", color: toggleState ? "grey" : purple[200] }}  onClick={() => handleViewModes(index, row, disabled)} />}
                                        <DeleteIcon  sx={{cursor: "pointer", color: toggleState ? "grey" : red[400] }}  onClick={() => handleDelete(index)} />
                                    </Box>
                                </TableCell>
                            </TableRow>)
                        })}
                    </TableBody>
                </Table>
            </TableContainer>}
            {openEdit && <EditModal editContent={editContent} open={openEdit} handleClose={() => setOpenEdit(!openEdit)} />}
        </Box>
    )

}

export default InventoryData;