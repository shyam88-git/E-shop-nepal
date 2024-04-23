import Signup from "@/pages/Auth/Signup";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "@/Error/NotFound";
import { Root } from "@radix-ui/react-slot";
import Home from "@/pages/Home/Home";
import Dashboard from "@/pages/Dashboard/Dashboard";
import Men_Collection from "@/pages/Collections/Men_Collection";
import Kid_Collection from "@/pages/Collections/Kid_Collection";
import Women_Collection from "@/pages/Collections/Women_Collection";
import Profile from "@/Profile/Profile";
import UserProfile from "@/Profile/UserProfile";
import Login from "@/pages/Auth/Login";
import UpdateAddress from "@/Profile/UpdateAddress";
import UploadProduct from "@/pages/Product/UploadProduct";
import ProductList from "@/pages/Product/ProductList";

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
    path: "dashboard/user-profile",
    element: <UserProfile />,
  },

  {
    path: "dashboard/product/add-product",
    element: <UploadProduct />,
  },
  {
    path: "dashboard/product/product-list",
    element: <ProductList />,
  },
  {
    path: "user-profile/update-address",
    element: <UpdateAddress />,
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
    path: "/login",
    element: <Login />,
  },

  {
    path: "/sign-up",
    element: <Signup />,
  },
]);

export default router;
