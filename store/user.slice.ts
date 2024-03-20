import {createAsyncThunk, createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {getToken} from "./local.ts";
import axios from "axios";
import {LoginInterface} from "../interfaces/Login.interface.ts";
import {Api} from "../utils/API.ts";


interface InitialState {
    token: string | null
    error: string | null
}

export const loadToken = createAsyncThunk('user/loadToken', async (payload: {email:string, password:string}) => {
    const {data} = await axios.post<LoginInterface>(`${Api}/auth/login`, {
        email: payload.email,
        password: payload.password
    })
    return data
    // return localStorage.getItem('token');
    // return token;
});

const initialState: InitialState = {
    token: getToken('token') || null,
    error: null,
    // token: null
}
export const userSlice: Slice<InitialState> = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        deleteToken: state => {state.token = null},
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(loadToken.fulfilled, (state, action: PayloadAction<LoginInterface>) => {
            state.error = null
            state.token = action.payload.access_token
            localStorage.setItem('token', action.payload.access_token)
        })
        builder.addCase(loadToken.rejected, state => {
            state.error = 'Invalid email or password'
        })
    }
})

export const {setToken, deleteToken, setError} = userSlice.actions
export const userReducer = userSlice.reducer;