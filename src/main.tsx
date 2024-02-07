import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Cart} from "../pages/Cart/Cart.tsx";
import {Main} from "./layout/Main/Main.tsx";
import {Menu} from "../pages/Menu/Menu.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Menu/>
            },
            {
                path: 'cart',
                element: <Cart/>
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
