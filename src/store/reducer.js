// third-party
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import admin from './slices/admin';
import storeView from './slices/storeView';

// project imports
// import userReducer from './slices/user';

// ==============================|| COMBINE REDUCER ||============================== //
// console.log("in reducer")
const reducer = combineReducers({
    admin,
    storeView
});

export default reducer;
