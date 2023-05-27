import React, { useState, useRef, useEffect, useContext, useCallback, useReducer, Fragment, Component, Suspense, RouterProvider, lazy } from 'react';
import { useSelector, Provider, useDispatch, connect } from 'react-redux';
import { useRouteLoaderData, json, redirect, defer, Await } from 'react-router-dom';
import { createSlice, configureStore } from '@reduxjs/toolkit'


ra
const App = () => {
  const [stateData, setStateData] = useState('');/*a useState -nek mindig kell értéket adni, az első maga a komponsne a második az aksi amivel feltölthető*/
  useStateHandler = () => { setStateData('databe') }
  const refData = useRef(''); /*useStat egy állpottal*/

  useEffect(() => {
    //make entihing
    document.title = `You clicked times`;

  }, [/*feltétel ha üres akkor autómatikus frissítés */]);
  /*elsőnek lefutó fügvény illetve triggerrel ellátot fügvény ami gyors frisítésre. */

  // import CartContext from '../../store/cart-context';
  const cartCtx = useContext(CartContext);
  /*CART CONTEXT.js
    const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    });
  */
  /*feladata a Context filban manipulálni a context filt*/

  const featchMovieHandler = useCallback(async function () {/*some code*/ });
  //8.14
  /*a useCallback arra szükséges, hogy adjon egy visszatérési értéket, hogy már egyszer lefutott,
   és így használhassuk a useEffectet aminek hatására automatikusan csak ELSŐRE fut így le magam a fügvény.*/

  const [state, dispatch] = useReducer(reducer, initialArg, init ?);
  //Lehetővé teszi az egyéni állapotlogikát.
  /*Reduxban használható */

  class Tibi extends Component {//Már nem nagyon használjuk 
    // class Tibi extends React.Component {
    render() {
      return <h2>Hi, I am a Tibi!</h2>;
    }
  }
  /*Az osztálykomponensnek tartalmaznia kell az extends React.Componentutasítást.
   Ez az utasítás örökséget hoz létre a React.Component számára, 
    és hozzáférést biztosít az összetevő számára a React.Component funkcióihoz.
    A komponenshez is kell egy render()metódus, ez a metódus HTML-t ad vissza.*/

  const { event, events } = useRouteLoaderData('event-detail');
  // 19_20

  const BlogPage = lazy(() => import('./pages/hello'));
  //22_22

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true, element: <Read />,
        },
        { path: '/read', element: <Read /> },
      ]
    }, {
      path: '/create',
      element: <><Create /><RootLayout /></>,
    },
  ])



  const isAuth = useSelector(state => state.auth.isAuthenticated);
  //useSelector Lehetővé teszi adatok kinyerését a Redux tároló állapotából egy választó funkció segítségével.
  //15.19


  /*INDEX.JS-be*/
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const dispatch = useDispatch();//inicializáljuk a dispatchet
  const loginHandler = (event) => {
    event.preventDefault();//ne frissüljön
    dispatch(reduxfugvenyneve.belsobbfugvényneve());//dispach lefuttatjuk a login metódust a reduxfugvenyneve reduxba
  }//15.19

  // connect feladata kapcsolatot biztosítani más osztályokkal és a reduxal
  export default connect(mapStateToProps, mapDispatchToProps)(Counter);
  //15.19

  const hibaKezes = () => {
    if (mode !== 'login' && mode !== 'signup') {
      //és ha se nem login se nem signup
      throw json({ message: 'Unsupported mode.' }, { status: 422 });
      //feladata felhasználónak és szervernek küldeni  hiba üzenetet csomagolva.
      //hiba üzenet
    }
  }
  const elvivO = () => { return redirect('/'); /*eldob a / oldalra a fügvény */ }

  /return defer({
    // event: await loadEvent(id),
  });
  /*Lehetővé teszi a betöltőktől visszaadott értékek elhalasztását úgy, 
  hogy ígéreteket ad át a megoldott értékek helyett.*/

  return (
    <Fragment>

      <form onSubmit={loginHandler}>
        <input ref={taskInputRef} placeholder='refbemuto' />
        {/* nincs felesleges div */}
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
          {/*
         19_20 
        lehetővé teszi a tartalék megjelenítését, amíg a gyermekei be nem fejezik a betöltést.
        */}
          <Await resolve={events}>
            {(loadedEvents) => <Oldal events={loadedEvents} /*21_21*/ />}
          </Await>
        </Suspense>
        <RouterProvider router={router} />
      </form>
      <div>
        rafce
        <hr />
        useRef 10_15
        useCallback 11_15
        useReducer 12_16
        Fragment 13_17
        Component 15_19
        Suspense 19_20
        lazy 22_22
        <hr />
        useSelector 15_19
        Provider 15_19
        useDispatch 15_19
        connect 15_19
        <hr />
        createSlice 15_19
        configureStore 15_19
      </div>
    </Fragment >
  )
}

export default App;

// ReDuxba 16_19 
//stor szelet készítése (feladata kissebb egységekben meghatározni így kényelmesebbét téve a használatát a reduxnak.)
const SilceNeve = createSlice({
  name:'feladat',
  initialState:{
    deklaralartadatok: 1,
  }
  reducers: {
    feadatneve(state, action){
      state.deklaralartadatok = action.payload.deklaralartadatok;
      //paylod hányszor hajtson végre valamit         
    },továbbiparancs(state, action){
      //Code...
    }
  }
})

//ezzel hozzuk létre a valós stort reduxban
const store = configureStore({
  reducer:{counter:counterSlice.reducer, auth: authSlice.reducer}
});


export default store;


  