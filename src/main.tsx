import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Cart} from "../pages/Cart/Cart.tsx";
import {Main} from "../pages/Main/Main.tsx";
import {Layout} from "./layout/Layout/Layout.tsx";
import {ProductCard} from "./components/ProductCard/ProductCard.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Main/>
            },
            {
                path: 'cart',
                element: <Cart/>
            },
            {
                path: '/product/:id',
                element: <ProductCard/>
            }
        ]
    },
    {
        path: '*',
        element: <h1>404</h1>
    }

])


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
