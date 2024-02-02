import { yupResolver } from "@hookform/resolvers/yup";
import { useMessagge } from "@hooks";
import { IRegisterForm } from "@models"
import { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from 'yup';


const initialForm: IRegisterForm = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    lastName: ''
}

export const RegisterPage = () => {

    const { getMessage } = useMessagge();

    const schema = useMemo(() => {
        return yup.object({
            email: yup.string()
                    .email(getMessage('auth.register.email.invalid'))
                    .required(getMessage('auth.register.email.required')),
            password: yup.string()
                    .required(getMessage('auth.register.password.required')),
            confirmPassword: yup.string()
                    .required(getMessage('auth.register.confirmPassword.required'))
                    .oneOf([yup.ref('password')], getMessage('auth.register.confirmPassword.invalid')),
            name: yup.string()
                    .required(getMessage('auth.register.name.required')),
            lastName: yup.string()
                    .required(getMessage('auth.register.lastName.required'))
        }).required();
    }, []);

    const form = useForm<IRegisterForm>({
        resolver: yupResolver(schema),
        defaultValues: initialForm
    });

    const {
        handleSubmit,
    } = form;

    const onSubmit : SubmitHandler<IRegisterForm> = (data) => {
        console.log(data);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex-grow-1 flex flex-column gap-3 align-items-center"
        >
            RegisterPage
        </form>
    )
}