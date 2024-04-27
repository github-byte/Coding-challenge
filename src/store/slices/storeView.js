import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../../store';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    toggleState: false,
    viewMode: true
};

const slice = createSlice({
    name: 'storeView',
    initialState,
    reducers: {
        // HAS ERROR
        setToggle(state, action){
            state.toggleState = action.payload
        },
        setMode(state, action){
            state.viewMode = action.payload
        }
    }
});

export const handeToggleState = (newState) => {
    dispatch(slice.actions.setToggle(newState))
}

export const handleModes = (newState) => {
    dispatch(slice.actions.setMode(newState))
}

// Reducer
export default slice.reducer;
