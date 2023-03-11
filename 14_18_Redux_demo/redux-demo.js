const redux = require('redux');
//ez CSAK fügvényként üzemelhet ami csak átadja az értéket, és mahához az oldalhoz nem ad semmi + functiot
const counterReducer = (state ={counter: 0} , action) => {
    if(action.type ==='increment'){
        return {
            counter: state.counter + 1
        }
    }

    if(action.type === 'decrement'){
        return{counter:state.counter-1,}
    }
    return state;
  
};
//itt létrehozom a stort és beleillesztem a conterReducert
const store = redux.createStore(counterReducer);

console.log(store.getState());

//megadja a legjubb állapotát a stornak és frussíti a getState-l
const counterSubscriber = () => {
    const latestState= store.getState();

    console.log(latestState);

};

//a subscribe, fügvény arra vár,hogy feliratkozó fügvényt kiszolgálja
store.subscribe(counterSubscriber);

//a dispatch 'cselekvést' ?frissítést? csinál...
store.dispatch({type: 'increment'});

store.dispatch({type:'decrement'})