// React Libraries
import { Navigate, createBrowserRouter, redirect } from "react-router-dom";

// Local Libraries
import { AuthLayout } from "@layout";
import { ConfirmationPage, LoginPage, NewPasswordPage, RegisterPage, ResetPasswordPage, ResetPasswordSentPage, ResettedPage } from "@pages";


export const authRouter = createBrowserRouter([
    {
        path: "/auth",
        element: <AuthLayout/>,
        errorElement: <Navigate to="/auth/login" />,
        children: [
            {
                index: true,
                loader: () => redirect("/auth/login")
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <RegisterPage />,
            },
            {
                path: 'reset',
                element: <ResetPasswordPage />,
            },
            {
                path: 'reset-sent',
                element: <ResetPasswordSentPage />,
            },
            {
                path: 'confirmation',
                element: <ConfirmationPage />,
            },
            {
                path: 'new-password',
                element: <NewPasswordPage />,
            },
            {
                path: 'resetted',
                element: <ResettedPage />,
            }
        ],
    },
]);