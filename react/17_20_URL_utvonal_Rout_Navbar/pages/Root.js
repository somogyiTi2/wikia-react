import { Outlet } from "react-router-dom";
//Outlet jelölőhely 
import MainNavigation from "../components/MainNavigation";
import classes from './Root.module.css'

function RootLayout() {
    return (<>
        <MainNavigation />
        <h1>Root Layout</h1>
        <main className={classes.content}>
            <Outlet />
        </main>
    </>);
}
export default RootLayout;

//az Outlet a Children a 
/*
const router = createBrowserRouter([
    {
      path: '/', element: <RootLayout />, children:
        [{ path: '/', element: <HomePage /> },
        { path: '2', element: <Ketto /> },
        { path: '/products', element: <ProductsPage /> }]
    },
  ]
  );*/