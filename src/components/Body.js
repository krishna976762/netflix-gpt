import React from "react";
import { SnackbarProvider } from 'notistack';
import Login from "./Login";
import Browse from "./Browse";

import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";


const Body = () => {


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
       <SnackbarProvider  anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      maxSnack={3}>
      <RouterProvider router={appRouter} />
      </SnackbarProvider>
    </div>
  );
};

export default Body;
