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
        {/* https://translate.google.com/?sl=auto&tl=hu&text=Suspense%20React%20Suspense%20is%20a%20feature%20in%20React%20that%20allows%20components%20to%20%E2%80%9Csuspend%E2%80%9D%20rendering%20while%20they%20are%20waiting%20for%20something%20to%20happen%2C%20such%20as%20data%20to%20be%20fetched%20from%20an%20API%20or%20an%20image%20to%20be%20loaded.%20Suspense%20allows%20developers%20to%20create%20a%20more%20seamless%20user%20experience%20by%20rendering%20a%20placeholder%20or%20fallback%20component%20while%20the%20component%20is%20waiting%20for%20the%20required%20data%20to%20be%20available.%20%20Here%20is%20a%20general%20overview%20of%20how%20React%20Suspense%20works%3A%20%20A%20component%20that%20uses%20Suspense%20wraps%20a%20component%20that%20may%20need%20to%20%E2%80%9Csuspend%E2%80%9D%20rendering%20in%20a%20Suspense%20component.%20The%20wrapped%20component%20throws%20a%20promise%20when%20it%20needs%20to%20suspend%20rendering.%20The%20Suspense%20component%20catches%20the%20promise%20and%20renders%20a%20fallback%20component%20while%20the%20promise%20is%20pending.%20When%20the%20promise%20resolves%2C%20the%20wrapped%20component%20is%20rendered%20with%20the%20required%20data.%20Visit%20the%20following%20resources%20to%20learn%20more%3A&op=translate */}
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
      {ReactDOM.createPortal(<Backdrop/>, portalElement)/*Gyereknek találkozó pont a szülő ponton kívüli csomaghoz. 6_11 */}
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


  