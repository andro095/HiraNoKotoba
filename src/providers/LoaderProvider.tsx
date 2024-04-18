import { Loader } from "@components";
import { useConfigStore } from "@hooks";
import { instance } from "@services";
import { FC, ReactNode, useEffect } from "react";



export const LoaderProvider : FC<LoaderProviderProps> = ({ children }) => {

    const { updateLoading } = useConfigStore();

    useEffect(() => {
        instance.interceptors.request.use(config => {
            updateLoading(true);

            return config;
        });

        instance.interceptors.response.use(response => {
            updateLoading(false);

            return response;
        },
        error => {
            updateLoading(false);

            return Promise.reject(error);
        });
    }, []);

    return (
        <>
            <Loader />
            {children}
        </>
    )
}

interface LoaderProviderProps {
    children: ReactNode;
}
