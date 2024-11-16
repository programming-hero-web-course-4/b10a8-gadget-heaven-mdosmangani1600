import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import DashBoard from './components/DashBoard/DashBoard.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import ProductCard from './components/ProductCard/ProductCard.jsx';
import Cart from './components/Cart/Cart.jsx';
import WishList from './components/WishList/WishList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>,
        loader: () => fetch('/categories.json'),
        
        children: [
          {
            path:'/',
            element:<ProductCard></ProductCard>,
            loader: () => fetch('/products.json'),
          },
          {
            path:'/category/:category',
            element:<ProductCard></ProductCard>,
            loader: () => fetch('/products.json')
          },
        ]
      },
      {
        path:"/dashboard",
        element: <DashBoard></DashBoard>,
        loader: () => fetch('/products.json'),
        children:[
          {
            path:"/dashboard",
            element:<Cart></Cart>,
          },
          {
            path:"wishlist",
            element:<WishList></WishList>,
          },
        ]
      },
      {
        path:"/statistics",
        element: <Statistics></Statistics> ,
      },
      {
        path:"/products/:product_id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/products.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
