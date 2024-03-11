import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import {Cart} from "../pages/Cart/Cart.tsx";
import {Layout} from "./layout/Layout/Layout.tsx";
import {Auth} from "./layout/Auth/Auth.tsx";
import {Register} from "../pages/Register/Register.tsx";
import {Login} from "../pages/Login/Login.tsx";
import {RequireAuthL} from "../utils/RequireAuth.tsx";
import {Provider} from "react-redux";
import {store} from "../store/store.ts";


const Main: React.LazyExoticComponent<React.FC> = lazy(() => import("../pages/Main/Main.tsx"))
const ProductCard: React.LazyExoticComponent<React.FC> = lazy(() => import("./components/ProductCard/ProductCard.tsx"))

const router = createBrowserRouter([
    {
        path: '/',
        element: <RequireAuthL><Layout/></RequireAuthL>,
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
                element: <Suspense fallback={<h2>LazyLoading...</h2>}>
                    <ProductCard/>
                </Suspense>,
                errorElement: <h1>404</h1>
            }
        ]
    },
    {
        path: 'auth',
        element: <Auth/>,
        children: [
            {
                index: true,
                loader: async () => redirect("/auth/login")
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
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
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>,
)
