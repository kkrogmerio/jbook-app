import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {persistReducer, persistStore} from 'redux-persist';
import ContentApi from "../client/apis/contentApi";
import { cellsSlice } from "./cells/slice";
import {bundlesSlice} from './bundles/slice';
import localForage from "localforage";

const reducers = combineReducers({
    cells:cellsSlice.reducer,
    bundles:bundlesSlice.reducer,

    [ContentApi.reducerPath]: ContentApi.reducer,
});
const persistConfig = {
    key: 'root',
    whitelist: ['content','cells','bundles'],
    storage: localForage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat([
            ContentApi.middleware,
        ]),
});
export const persistor = persistStore(store);
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();