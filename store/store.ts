import {configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./user.slice.ts";
import {setToken} from "./local.ts";

export const store = configureStore({
    reducer: {
       user: userReducer
    }
})

store.subscribe(() =>{
    const newToken = store.getState().user.token
    if (newToken){
        setToken('token', newToken)
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
