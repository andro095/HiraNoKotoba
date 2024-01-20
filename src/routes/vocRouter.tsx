import { Navigate, createBrowserRouter } from "react-router-dom";


export const vocRouter = createBrowserRouter([
    {
        path: "/",
        element: <h1>Vocabulary</h1>,
        errorElement: <Navigate to="/" />,
        
    },
    {
        path: "*",
        element: <Navigate to="/" />,
    },
])