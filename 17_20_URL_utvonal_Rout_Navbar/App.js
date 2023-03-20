//útvonal választáshoz telepítem a 
//npm i react-router-dom
import { createBrowserRouter } from "react-router-dom";
//createBrowserRouter mehatározhatjuk az útvonalakat
import HomePage from "./pages/Home";
import { RouterProvider } from "react-router-dom";
//RouterProvider ez írja újra a JSX-et
import Ketto from "./pages/Ketto";

import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";

import ProductsPage from "./pages/Products.js";
import ProductsDetailPage from './pages/ProdusctDetail'



const router = createBrowserRouter([
  {
    path: '/',
     element: <RootLayout />,
    errorElement:<ErrorPage/>,
     children:
      [{ index: true, element: <HomePage /> },
      // { path: '/', element: <HomePage /> },
      { path: '2', element: <Ketto /> },
      { path: '/products', element: <ProductsPage />},
      {path:'/products/:prductsId', element: <ProductsDetailPage/>},
      // : al testre szabható dinamikus lesz...
      //és lehet folytatni / el, hogy mélyebre menjen.
     ]
  },
  {
    path: '/Klon',
     element: <RootLayout />,
    errorElement:<ErrorPage/>,
     children:
      [{ path: '', element: <HomePage /> },
      { path: '2', element: <Ketto /> },
      { path: 'products', element: <ProductsPage />},
      {path:'products/:prductsId', element: <ProductsDetailPage/>},
      // : al testre szabható dinamikus lesz...
      //és lehet folytatni / el, hogy mélyebre menjen.
     ]
  }
  /*így lehet relativizálni a linkeket... Értem ezt hogy root/2 működik pl...*/

  // {path:'/', element: <HomePage/> },
  // {path:'2', element:<Ketto/>},
  // {path:'/products', element:<ProductsPage/>}
]
);
//midnen {}-egy új útvonal, kulcsszó path:útvonal meghatározó
//path '/' => root

//Régi verziókban a returnba volt beírva, hogy 
/* 
<Rout path="welcam">
<Welcome/>
</Rout>*/

function App() {
  return (
    <div>
      <p>Elötte</p>
      <RouterProvider router={router} />
    </div>
  );
}
//<RouterProvider újra renderelő
// router(tulajdonság kötelezően a neve)={router(változó)}
export default App;
