import { useAuthStore } from "@hooks";
import { RouterProvider } from "react-router-dom";
import { LoginState } from "@models";
import { vocRouter, authRouter } from "@routes";

export const App = () => {

    const { authState } = useAuthStore();

    const currentRouter = authState === LoginState.Authenticated ? vocRouter : authRouter;

    return (
        <RouterProvider router={currentRouter} />
    )
}
