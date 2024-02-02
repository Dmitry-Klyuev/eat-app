import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Главная</h1>
    },
    {
        path: '/about',
        element: <h1>О нас</h1>
    },
    {
        path: '*',
        element: <h1>404</h1>
    }

])
function App() {
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
