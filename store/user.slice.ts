import {createAsyncThunk, createSlice, PayloadAction, Slice} from "@reduxjs/toolkit";


interface InitialState {
    token: string | null
}

export const loadToken = createAsyncThunk('user/loadToken', async () => {
    return localStorage.getItem('token');
    // return token;
});

const initialState: InitialState = {
    token: null
}
export const userSlice: Slice<InitialState> = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        deleteToken: state => {state.token = null},
        checkToken: state => {
            state.token = localStorage.getItem('token') ? localStorage.getItem('token') : null
        }
    }
})

export const {setToken, deleteToken, checkStore} = userSlice.actions
export const userReducer = userSlice.reducer;