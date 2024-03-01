import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Cart} from "../pages/Cart/Cart.tsx";
import {Layout} from "./layout/Layout/Layout.tsx";


const Main: React.LazyExoticComponent<React.FC> = lazy(() => import("../pages/Main/Main.tsx"))
const ProductCard: React.LazyExoticComponent<React.FC> = lazy(() => import("./components/ProductCard/ProductCard.tsx"))

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Suspense fallback={<h2>LazyLoading...</h2>}>
                    <Main/>
                </Suspense>
            },
            {
                path: 'cart',
                element: <Cart/>
            },
            {
                path: '/product/:id',
                element:  <Suspense fallback={<h2>LazyLoading...</h2>}>
                    <ProductCard/>
                </Suspense>,
                errorElement: <h1>404</h1>
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
