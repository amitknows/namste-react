import React, { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import AppLayout from "../AppLayout";
import App from "../App";
import Error from "../pages/Error";
import ResturantMenu from "../components/ResturantMenu";
// import Grocery from "../components/Grocery";
import Shimmer from "../components/Shimmer";

//App optimization
//chunking
// code spliting
//dyanamic bundling
//lazy loading
//on demand loading
//dynamic import

const Grocery = lazy(() => import("../components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <AppLayout />,
      },

      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/resturants/:resId",
        element: <ResturantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer/>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

function AapRoutes() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}
export default AapRoutes;
