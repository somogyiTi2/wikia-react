import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart-slice';

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});

//Globális állapotot meghatározza
//store.getState =fügvény állapot
//A ReturnType egy beépített TypeScript típus, amely kiszámítja egy adott függvény visszatérési értékének típusát.
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;