import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../../store';

// ----------------------------------------------------------------------

const initialState = {
    error: null,
    toggleState: false,
};

const slice = createSlice({
    name: 'storeView',
    initialState,
    reducers: {
        // HAS ERROR
        setToggle(state, action){
            state.toggleState = action.payload
        }
    }
});

export const handeToggleState = (newState) => {
    dispatch(slice.actions.setToggle(newState))
}

// Reducer
export default slice.reducer;
