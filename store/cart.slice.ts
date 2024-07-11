import {createSlice, PayloadAction,} from "@reduxjs/toolkit";


export interface carProduct {
    id: number
    count: number
}

export interface cartItems {
    items: carProduct []
}

const initialState: cartItems = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<number>) => {
            const existItem = state.items.find(i => i.id === action.payload)
            if (!existItem) {
                state.items.push({id: action.payload, count: 1})
                return
            }
            state.items.map(i => {
                if (i.id === action.payload) {
                    i.count += 1
                }
                return i
            })

        }
    }
})

export const cartActions = cartSlice.actions
export const cartReducers = cartSlice.reducer;