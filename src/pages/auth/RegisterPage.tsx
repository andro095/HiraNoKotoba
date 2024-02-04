import { MInputText, MPassword, SubmitButton, message } from "@components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMessagge } from "@hooks";
import { IRegisterForm } from "@models"
import { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();

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

        navigate('/auth/confirmation', { state: { email: data.email }})
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex-grow-1 flex flex-column gap-3 align-items-center"
        >
            <MInputText 
                form={form}
                label={message('auth.register.name.label')}
                name="name"
                keyfilter="alpha"
                wrapperClassName="w-8"
            />
            <MInputText 
                form={form}
                label={message('auth.register.lastName.label')}
                name="lastName"
                keyfilter="alpha"
                wrapperClassName="w-8"
            />
            <MInputText 
                form={form}
                label={message('auth.register.email.label')}
                name="email"
                inputMode="email"
                keyfilter="email"
                wrapperClassName="w-8"
            />
            <MPassword
                feedback
                form={form}
                label={message('auth.register.password.label')}
                name="password"
                wrapperClassName="w-8"
            />
            <MPassword 
                form={form}
                label={message('auth.register.confirmPassword.label')}
                name="confirmPassword"
                wrapperClassName="w-8"
            />
            <SubmitButton
                rounded
                label={message('auth.register.submit')}
                className="w-8 bg-white text-primary"
            />
            <div
                className="w-8 flex justify-content-center align-items-end flex-grow-1"
            >
                <Link
                    to="/auth/login"
                    className="text-white mb-4"
                >
                    {message('auth.register.login')}
                </Link>
            </div>
        </form>
    )
}