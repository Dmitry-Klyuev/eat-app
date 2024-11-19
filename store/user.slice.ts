import { createAsyncThunk, createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {getToken} from "./local.ts";
import axios, {AxiosError} from "axios";
import {LoginInterface} from "../interfaces/Login.interface.ts";
import {Api} from "../utils/API.ts";
import {RootState} from "./store.ts";


export interface userInfo {
    "id"?: number,
    "email"?: string
    "passwordHash"?: string
    "address"?: string,
    "name"?: string,
    "restoreToken"?: null,
}

interface InitialState {
    token: string | null
    error: string | null
    userInfo: userInfo
    registerError: string | null
}

export interface state {
    user: InitialState
}

export const loadToken = createAsyncThunk('user/loadToken', async (payload: { email: string, password: string }) => {
    const {data} = await axios.post<LoginInterface>(`${Api}/auth/login`, {
        email: payload.email,
        password: payload.password
    })
    return data
});

export const loadUserInfo = createAsyncThunk('user/info', async (_, {getState}) => {
    try {
        const state = getState() as RootState
        const token = state.user.token
        const {data} = await axios.get<userInfo>(`${Api}/user/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return data
    } catch (e) {
        if (e instanceof AxiosError) {
            return e.response?.data.message
        }
    }


})

export const registerUser= createAsyncThunk('user/reguster',
    async (payload: {
    email: string,
    name: string,
    password: string
}) => {
    try {
    const res = await axios.post(`${Api}/auth/register`, {
         email : payload.email, password: payload.password, name: payload.name
    })
        return res.data
    }catch (e) {
        if (e instanceof AxiosError){
            return e.response?.data.message
        }
    }
})

const initialState: InitialState = {
    token: getToken('token') || null,
    error: null,
    registerError: null,
    userInfo: {}
    // token: null
}
export const userSlice: Slice<InitialState> = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        deleteToken: state => {
            state.token = null
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
        },
    },
    extraReducers: builder => {
        builder.addCase(loadToken.fulfilled, (state, action: PayloadAction<LoginInterface>): void => {
            state.error = null
            state.token = action.payload.access_token
            localStorage.setItem('token', action.payload.access_token)
        })
        builder.addCase(loadToken.rejected, state => {
            state.error = 'Invalid email or password'
        })
        builder.addCase(loadUserInfo.fulfilled, (state, action: PayloadAction<userInfo>): void => {
            state.error = null
            state.userInfo = action.payload
        })
        builder.addCase(loadUserInfo.rejected, (state) => {
            state.error = 'Ошибка получения пользователя'
        })
        builder.addCase(registerUser.fulfilled, (state, action) => {
            console.log('registered')
            state.error = null
            state.token = action.payload.access_token
            localStorage.setItem('token', action.payload.access_token)
        })
        // @ts-ignore 
        builder.addCase(registerUser.rejected, (state, action: PayloadAction<string>): void => {
            state.registerError = action.payload
        })

    }
})

export const {deleteToken, setError} = userSlice.actions
export const userReducer = userSlice.reducer;