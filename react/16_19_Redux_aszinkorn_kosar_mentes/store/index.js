import { createSlice, configureStore } from '@reduxjs/toolkit';
import uiSlice from "./ui-slice"
import cartSlice from './cart-slice';

const incrementCounter = { counter: 0 };


console.log(incrementCounter);
const counterSlice = createSlice({
    name: 'counterdb',
    initialState: incrementCounter,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
    }

});

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        counter: counterSlice.reducer,
        cart: cartSlice.reducer
    }
})

export const counterActions = counterSlice.actions;

export default store;
