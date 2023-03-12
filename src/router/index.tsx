import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";

const router = createBrowserRouter([
    {
      path: '/',
      element:<h1>Chat</h1>
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/signup",
      element: <SignUp/>,
    },
  ]);