import { GoogleButton, MInputSwitch, MInputText, MPassword, SubmitButton, message } from "@components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMessagge } from "@hooks";
import { ILoginForm } from "@models";
import { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from 'yup';

const initialForm: ILoginForm = {
    email: '',
    password: '',
    rememberMe: false
}

export const LoginPage = () => {

    const { getMessage } = useMessagge();
    
    const schema = useMemo(() => {
        return yup.object({
            email: yup.string()
                    .email(getMessage('auth.login.email.invalid'))
                    .required(getMessage('auth.login.email.required')),
            password: yup.string()
                    .required(getMessage('auth.login.password.required')),
            rememberMe: yup.boolean().default(false)
        }).required();
    }, []);

    const form = useForm<ILoginForm>({
        resolver: yupResolver(schema),
        defaultValues: initialForm
    });

    const {
        handleSubmit,
    } = form;

    const onSubmit: SubmitHandler<ILoginForm> = (data) => {
        console.log(data);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex-grow-1 flex flex-column gap-3 align-items-center"
        >
            <MInputText 
                form={form}
                label={message('auth.login.email.label')}
                name="email"
                inputMode="email"
                keyfilter="email"
                wrapperClassName="w-8"
            />
            <MPassword 
                form={form}
                label={message('auth.login.password.label')}
                name="password"
                wrapperClassName="w-8"
            />
            <div className="w-8 flex justify-content-between align-items-center">
                <MInputSwitch
                    noError 
                    form={form}
                    label={message('auth.login.remember')}
                    name="rememberMe"
                />
                <Link
                    to="/auth/reset"
                    className="text-white"
                >
                    {message('auth.login.forgot')}
                </Link>
            </div>
            <SubmitButton 
                rounded
                label={message('auth.login.submit')}
                className="w-8 bg-white text-primary"
            />
            <span
                className="text-sm"
            >
                {message('auth.login.other')}
            </span>
            <div
                className="w-8 flex justify-content-center gap-2"
            >
                <GoogleButton />
            </div>
            <div
                className="w-8 flex justify-content-center align-items-end flex-grow-1"
            >
                <Link
                    to="/auth/register"
                    className="text-white mb-4"
                >
                    {message('auth.login.register')}
                </Link>
            </div>
        </form>
    )
}