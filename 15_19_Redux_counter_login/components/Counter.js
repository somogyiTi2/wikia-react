import { counterActions } from '../store/index';

import { Component } from 'react';
import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from 'react-redux';
import { INCREMENT } from '../store/index';
//useSelector Lehetővé teszi adatok kinyerését a Redux tároló állapotából egy választó funkció segítségével.
//ezzel nyerheztő ki maga az állapot
//useDispatch Ez a horog hivatkozást ad vissza a dispatchfüggvényre a Redux tárolóból. Szükség szerint használhatja a műveletek elküldésére.
//connect feladata kapcsolatot biztosítani más osztályokkal és a reduxal

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);
  // const counter = useSelector(state => state.counter);
  // const show= useSelector(state => state.showCounter);

  const incrementHandler = () => {
    // dispatch({type:INCREMENT}) //régi megoldás
    // dispatch({ type: 'increment' })
    //action.type === meghatározása
    dispatch(counterActions.increment());
  }
  const increaseHandler = () => {
    // dispatch({ type: 'increase', amount: 5 })
    //meghatározható hányszor hajtsa végre az amountal. 2 változó
    dispatch(counterActions.increase(5));  // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
    //payload KÖTELEZŐEN 
  }
  const decrementHandler = () => {
    // dispatch({ type: 'decrement' })
    dispatch(counterActions.decrement());
  }

  const toggleCounterHandler = () => {
    // dispatch({ type: 'togle' })
    dispatch(counterActions.toggleCounter());
   };
   
   return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

//connectes megoldás:
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
