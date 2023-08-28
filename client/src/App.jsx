import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Products, { productLoader } from './pages/Products'
import SingleProduct, { singleProductLoader } from './pages/SingleProduct'

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
    }
])
const App = () => {
    return (<RouterProvider router={router}></RouterProvider>)
}

export default App