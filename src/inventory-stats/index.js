import React, { useEffect, useState } from 'react'
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import useStyles from './style';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import { useSelector } from 'react-redux';

const statsArrDefault = [{ name: "Total Product", icon: <ShoppingCartIcon sx={{ fontSize: 24 }} />, value: 0 }, { name: "Total Store Value", icon: <CurrencyExchangeIcon />, value: 0 }, { name: "Out of stocks", icon: <RemoveShoppingCartIcon />, value: 0 }, { name: "No of Category", icon: <CategoryIcon />, value: 0 }]
const InventoryStats = (props) => {
    const [statsArr, setStatsArr] = useState(statsArrDefault);
    const classes = useStyles();
    const storeData = useSelector((state) => state?.admin)
    const { totalProducts = 0, numOfCategories = 0, numOfOutOfStocks = 0, totalPrice = 0 } = storeData || {}
    useEffect(() => {
        console.log("data2323", storeData)
        const newArr = [...statsArr]
        newArr[0].value = totalProducts
        newArr[1].value = totalPrice
        newArr[2].value = numOfOutOfStocks
        newArr[3].value = numOfCategories
        setStatsArr(newArr)
    }, [storeData, totalProducts, numOfCategories, numOfOutOfStocks])
    const theme = useTheme();
    const mwebView = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box rowGap={2} display="flex" flexWrap={"wrap"} justifyContent="space-between">
            {statsArr?.map((item, index) => {
                const { name = '', value = '', icon = null } = item || {}
                return (
                    <Box width={mwebView ? '43%' : '23%'} key={index} className={classes.statsBox}>
                        <Box display={"flex"} flexDirection={"row"} p={2}>
                            <Box pr={3}>{icon}</Box>
                            <Box>
                                <Typography variant="subtitle">{name}</Typography>
                                <Typography sx={{ paddingTop: 1 }} variant="h4" >{value}</Typography>
                            </Box>
                        </Box>
                    </Box>
                )
            })}
        </Box>
    )

}

export default InventoryStats;