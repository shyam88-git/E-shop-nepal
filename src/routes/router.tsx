import Signup from "@/pages/Auth/Signup";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "@/Error/NotFound";
import { Root } from "@radix-ui/react-slot";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
  },

  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/Login",
    element: <Login />,
  },

  {
    path: "/Sign-up",
    element: <Signup />,
  },
]);

export default router;
