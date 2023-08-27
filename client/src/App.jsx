import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path:'/',
        element:<h1><Outlet/></h1>,
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