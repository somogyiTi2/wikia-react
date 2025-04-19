import {createSlice} from '@reduxjs/toolkit';
//külön részegységekre lehet szedni a redux slicok részeket.
const initialCounterState = { counter: 0, showCounter: true };

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



export default counterSlice;