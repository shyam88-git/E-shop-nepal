import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AuthSlice } from "./features/auth/authSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { rootApi } from "./root.api.";
import { productSlice } from "./features/products/productSlice";


const rootReducer = combineReducers({
    auth: AuthSlice.reducer,
    product: productSlice.reducer,
    [rootApi.reducerPath]: rootApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(rootApi.middleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch);
