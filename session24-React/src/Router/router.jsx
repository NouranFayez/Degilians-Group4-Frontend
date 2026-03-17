import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Login } from "../pages/Login";
import { SingleProduct } from "../pages/singleProduct";


export const Route = createBrowserRouter([
    {
        // http://localhost:5173
        path : "", 
        element : <Layout/>,
        children :[
            { element: <Home/> , index : true },
            // http://localhost:5173/products
            // http://localhost:5173/products/id

            // {path:"products" , children:[
            //     {element : <Products/>},
            //     {path:":id" , element:<SingleProduct/>}
            // ]},
            {path:"products/" , element : <Products/>},
            {path:"products/:productID" , element : <SingleProduct/>},
            {path:"login" , element : <Login/>},
        ]
    }
])