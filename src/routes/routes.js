import { RouterProvider, createBrowserRouter} from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import AppLayout from "../AppLayout";
import App from "../App";
import Error from "../pages/Error";


const appRouter = createBrowserRouter(
    [
      { 
        path: "/", 
        element: <App />, 
        errorElement:<Error/>,
        children:[
            {
                path:"",
                element:<AppLayout/>
            },
            
            {
                path:"/about",
                element:<AboutUs/>
              },
              {
                path:"/contact-us",
                element:<ContactUs/>
              }
        ]
      },
     
    ]
  );

function AapRoutes(){
    return(
        <>
        <RouterProvider router={appRouter}/>
        
        </>
    )
}
  export default AapRoutes;