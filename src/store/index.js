// third-party
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';

import { persistStore } from 'redux-persist';

// project imports
import rootReducer from './reducer';
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, immutableCheck: false })
});
// const persistedReducer = persistReducer(persistConfig, rootReducer);
const persister = persistStore(store);

const { dispatch } = store;

const useDispatch = () => useAppDispatch();
const useSelector = useAppSelector;
console.log("inside store", store, persister, dispatch)
export { store, persister, dispatch, useSelector, useDispatch };
