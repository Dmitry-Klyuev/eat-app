import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./user.slice.ts";
import {setToken} from "./local.ts";
import {cartReducers} from "./cart.slice.ts";

export const store = configureStore({
    reducer: {
        user: userReducer,
        count: cartReducers
    }
})

store.subscribe(() => {
    const newToken = store.getState().user.token
    if (newToken) {
        setToken('token', newToken)
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
