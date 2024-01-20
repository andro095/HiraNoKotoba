import { AuthLayout } from "@layout";
import { Navigate, createBrowserRouter } from "react-router-dom";


export const authRouter = createBrowserRouter([
    {
        path: "/auth",
        element: <AuthLayout/>,
        errorElement: <Navigate to="/auth" />,
    },
    {
        path: "*",
        element: <Navigate to="/auth" />,
    },
]);