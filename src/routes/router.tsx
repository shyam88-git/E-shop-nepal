import Signup from "@/pages/Auth/Signup";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "@/Error/NotFound";
import { Root } from "@radix-ui/react-slot";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Auth/Login";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Men_Collection from "@/pages/Collections/Men_Collection";
import Kid_Collection from "@/pages/Collections/Kid_Collection";
import Women_Collection from "@/pages/Collections/Women_Collection";
import Profile from "@/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },

  {
    path: "dashboard/women",
    element: <Women_Collection />,
  },
  {
    path: "dashboard/men",
    element: <Men_Collection />,
  },
  {
    path: "dashboard/men/:id",
    element: <Profile />,
  },
  {
    path: "dashboard/women/:id",
    element: <Profile />,
  },
  {
    path: "dashboard/kid/:id",
    element: <Profile />,
  },
  {
    path: "dashboard/kid",
    element: <Kid_Collection />,
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
