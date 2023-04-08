import { combineReducers } from "redux";
import productSlice from "./productSlice";
import { persistReducer, persistStore } from 'redux-persist'
import { configureStore } from "@reduxjs/toolkit";

import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
    product: productSlice
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({ reducer: persistedReducer })
const persistor = persistStore(store)

export { store, persistor }