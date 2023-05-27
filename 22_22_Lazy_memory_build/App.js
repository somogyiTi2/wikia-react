import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';


import HomePage from './pages/Home';
// import PostPage, { loader as postLoader } from './pages/Post';
import RootLayout from './pages/Root';

// import BlogPage, { loader as postsLoader } from './pages/Blog';
const BlogPage = lazy(() => import('./pages/Blog'));
//azért kell azt adni, hogy mindig legalább valis legyen az oldal.
const PostPage= lazy(()=> import('./pages/Post'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Suspense fallback={<p>Loading...</p>}><HomePage /></Suspense>,
        //https://react.dev/reference/react/Suspense
        //Suspense megvárja a tartalom betöltését (itta Loading feliratot teszi addig ki.)
      },
      {
        path: 'posts',
        children: [
          {
            index: true, element: <BlogPage />,
            loader: () => import('./pages/Blog').then(module => module.loader())
          },
          /*Ha a loadernél is importáhatunk dolgokat ez egy dinamikus importálás. ahhoz,
           ez egy promis szóval használhatom a then kifejést 
           így csak akkor töltődik be amikor kell (gyorsabb olddal) LASY LOADER */
          { path: ':id', 
          element: <Suspense fallback={<p>Loading...</p>}><PostPage /></Suspense>,
           loader: (meta) => 
           import('./pages/Post').then((module) => module.loader(meta)),
          //  a metra szó segíte megadni nek hova kell berendelni 
         },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
