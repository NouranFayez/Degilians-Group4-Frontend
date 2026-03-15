import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Contact } from "../pages/Contact";


// http://localhost:5173 ==> home
// http://localhost:5173/Products ==> products
// http://localhost:5173/Contact ==> Contact
export const CustomRouter = createBrowserRouter([
    {
        path : "" ,
        element : <Layout/>,
        children :[
            {
              element : <Home/>   , index: true 
            },
            {
               path : "products" , element:<Products/> 
            },
             {
               path : "contact" , element:<Contact/> 
            },

        ]
    }
])