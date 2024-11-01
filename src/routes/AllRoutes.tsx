import { AdminDashboard } from "../pages/admin/Dashboard";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Home from "../pages/home";
import { RouteObject, useNavigate } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import { ProductDetails } from "../pages/home/ProductDetails";

const PublicRoutes = ({ children }) => {
    const navigate = useNavigate()
    const { authToken } = useCartStore((state) => state);
    return !authToken ? children : navigate('/')
}

export const AllRoutes: RouteObject[] = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/product/:id",
        element: <ProductDetails />
    },
    {
        path: "/dashboard",
        element: <AdminDashboard />
    },
    {
        path: "/auth/register",
        element: <PublicRoutes><Register /></PublicRoutes>
    },
    {
        path: "/auth/login",
        element: <PublicRoutes><Login /></PublicRoutes>
    },
];
