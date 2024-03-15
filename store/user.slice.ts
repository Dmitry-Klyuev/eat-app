import {createAsyncThunk, createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";
import {getToken} from "./local.ts";


interface InitialState {
    token: string | null
}

export const loadToken = createAsyncThunk('user/loadToken', async () => {
    return localStorage.getItem('token');
    // return token;
});

const initialState: InitialState = {
    token: getToken('token')
}
export const userSlice: Slice<InitialState> = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        deleteToken: state => {state.token = null},
    }
})

export const {setToken, deleteToken} = userSlice.actions
export const userReducer = userSlice.reducer;