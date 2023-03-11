import { createSlice, configureStore } from '@reduxjs/toolkit';

// import { createStore  } from 'redux';
//inicializáljuk az állapotot hogy ne legyen ez: 
// const counterReducer = (state = { counter: 0,  }, action) => {

//ÁTHELYEZVE A COUNTER.JS-be
/*const initialCounterState = { counter: 0, showCounter: true };
// export const INCREMENT ='increment'; //régi megoldás
//fontos hogy a initialisateState objek alatt van!!
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      // state.counter = state.counter + action.amount;
      //abban az eseten ha playloadot használok akkor:
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});
//Név
//változó:
/*de autómatikusan ha csak annyít írok be, hogy initialisateState akkor 
alapértelmezettként a változót teszi be.*/
//metódusok

import counterSlice from './counter'

// ÁTHELYZEVE A AUTH.JS-be
/*const initialAuthState = {
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'authentcation',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});*/

import authSlice from './auth'

//EGY REDUKTOR LEHET
// const store = createStore(szeletcounter.reducer);

//ha több dimenzióst szeretnénk:  reducer:{counter:szeletcounter.counter }

const store = configureStore({
  // reducer: counterSlice.reducer
  reducer:{counter:counterSlice.reducer, auth: authSlice.reducer}
});


//ÍGY LEHET MEGHÍVNI A MŰVELETEKET:
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

//szabályok:
// const counterReducer = (state = initialisateState, action) => {
//   if (action.type === 'increment') {
//     //ILYET NE:
//     // state.counter++;
//     // return state ;
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   }
//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   }

//   if (action.type === 'togle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     }
//   }

//   return state;
// };
//memória hely foglalás:
// const store = createStore(counterReducer);
//expotálás

export default store;