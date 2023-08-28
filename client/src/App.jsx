import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Products, { productLoader } from './pages/Products'
import SingleProduct, { singleProductLoader } from './pages/SingleProduct'
import Cart from './pages/Cart'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
    },
    {
        path:'/products',
        element:<Products/>,
        loader:productLoader,
    },
    {
        path:'/products/:id',
        element:<SingleProduct/>,
        loader:singleProductLoader
    },
    {
        path:'/cart',
        element:<Cart/>
    }
])
const App = () => {
    return (<RouterProvider router={router}></RouterProvider>)
}

export default App