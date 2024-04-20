import NotFound from "@/Error/NotFound";
import Login from "@/pages/Auth/Login";
import Signup from "@/pages/Auth/Signup";
import { Home } from "lucide-react";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/Login",
    element: <NotFound />,
  },

  {
    path: "/Sign-up",
    element: <Signup />,
  },
]);

export default router;
