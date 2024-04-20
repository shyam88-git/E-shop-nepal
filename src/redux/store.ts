import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./features/auth/authSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({

    auth: AuthSlice.reducer,
})
export const store = configureStore({

    reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

setupListeners(store.dispatch);
