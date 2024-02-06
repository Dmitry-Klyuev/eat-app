import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Cart} from "../pages/Cart/Cart.tsx";
import {LeftPanel} from "./layout/LeftPanel/LeftPanel.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LeftPanel/>,
        children: [
            {
                path: 'about',
                element: <h1>О нас</h1>
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
        <RouterProvider router={router} />
    </React.StrictMode>,
)
