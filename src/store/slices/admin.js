import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { dispatch } from '../../store';
import { url } from '../../constants';
// ----------------------------------------------------------------------

const initialState = {
    error: null,
    data: [],
    totalProducts: 0,
    totalPrice: 0,
    numOfOutOfStocks: 0,
    numOfCategories: 0,
    isLoading: true,
};

const slice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        // HAS ERROR
        hasError(state, action) {
            state.error = action.payload?.err;
        },
        setData(state, action) {
            const { data = [] } = action.payload || {};
            const categories = {};
            let outOfStocks = 0;
            let totalPrice = 0;
            state.data = data;
            const filteredData = data?.filter((item) => !item.disabled)
            filteredData.forEach((item) => {
                const { category = '', quantity = 0, value = '' } = item || {};
                const priceNumArr = value.split("") || [];
                const newPrice = (priceNumArr || [])?.slice(1, priceNumArr.length)?.join("")
                totalPrice += Number(newPrice)
                if (Number(quantity) === 0) {
                    outOfStocks += 1;
                }
                categories[category] = categories[category] + 1 || 1;
            });
            state.totalProducts = filteredData.length;
            console.log("inside new calcs", data, categories, outOfStocks, totalPrice)
            state.numOfOutOfStocks = outOfStocks;
            state.numOfCategories = Object.keys(categories).length;
            state.totalPrice = totalPrice;
        }
    },
});

export const getInventoryData = async () => {
    try {
        const response = await axios.get(url)
        let { data = [], error = "" } = response || {};
        if (data.length > 0) {
            data.forEach((item) => {
                item.disabled = false;
            })
            dispatch(slice.actions.setData({ data }))
        }
        else {
            dispatch(slice.actions.hasError({ err: error }))
        }
        console.log("inside api data2323", response)

    } catch (error) {
        dispatch(slice.actions.hasError({ err: "Something went wrong" }))
    }
}

export const updateData = (newData) => {
    console.log("in update data", newData)
    dispatch(slice.actions.setData({ data: newData }))
}

export default slice.reducer;
