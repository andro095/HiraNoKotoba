// * React Libraries
import { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

// * Third Party Libraries
import { boolean, object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// * Hooks
import { useMessagge } from "@hooks";

// * Services
import { instance } from "@services";

// * Components
import { GoogleButton, MInputSwitch, MInputText, MPassword, SubmitButton, message } from "@components";

// * Models
import { ILoginForm } from "@models";

const initialForm: ILoginForm = {
    email: '',
    password: '',
    rememberMe: false
}

export const LoginPage = () => {

    const { getMessage } = useMessagge();
    
    const schema = useMemo(() => {
        return object({
            email: string()
                    .email(getMessage('auth.email.invalid'))
                    .required(getMessage('auth.email.required')),
            password: string()
                    .required(getMessage('auth.password.required')),
            rememberMe: boolean().default(false)
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

        instance.get('')
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex-grow-1 flex flex-column gap-4 align-items-center"
        >
            <MInputText 
                form={form}
                label={message('auth.email.label')}
                name="email"
                inputMode="email"
                keyfilter="email"
                wrapperClassName="w-8"
            />
            <MPassword 
                form={form}
                label={message('auth.password.label')}
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