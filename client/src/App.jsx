import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './pages/Home'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        children:[
            {
                index:true,
                element:<h1>whats up</h1>,
            }
        ]
    }
])
const App = () => {
    return (<RouterProvider router={router}></RouterProvider>)
}

export default App