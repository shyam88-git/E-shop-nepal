import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialStateI {

    noAuth: boolean;
    authenticated: boolean;
    authUser: string | null;
    token: string | null;
}

const initialState: InitialStateI = {

    noAuth: true,
    authenticated: false,
    authUser: null,
    token: null,
}


export const AuthSlice = createSlice({

    name: 'Auth',
    initialState,
    reducers: {

        initAuthUser: (state, { payload }: PayloadAction<LoginPaylod>) => {

            state.noAuth = false,
                state.authenticated = true,
                state.authUser = payload.msg,
                state.token = payload.token,

                localStorage.setItem('x-auth-token', payload.token);
        },

        logout: (state) => {

            state.authUser = null;
            state.authenticated = false,
                state.noAuth = true,


                localStorage.removeItem('x-auth-token');
        }
    }
})

export const { initAuthUser, logout } = AuthSlice.actions;
