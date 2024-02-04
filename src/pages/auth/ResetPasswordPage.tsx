import { MInputText, SubmitButton, message } from "@components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMessagge } from "@hooks";
import { IResetPasswordForm } from "@models"
import { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from 'yup';


const initialForm : IResetPasswordForm = {
    email: ''
}

export const ResetPasswordPage = () => {
    
    const { getMessage } = useMessagge();
    const navigate = useNavigate();

    const schema = useMemo(() => {
        return yup.object({
            email: yup.string()
                    .email(getMessage('auth.reset.email.invalid'))
                    .required(getMessage('auth.reset.email.required'))
        }).required();
    }, []);

    const form = useForm<IResetPasswordForm>({
        resolver: yupResolver(schema),
        defaultValues: initialForm
    });

    const {
        handleSubmit,
    } = form;

    const onSubmit : SubmitHandler<IResetPasswordForm> = (data) => {
        console.log(data);

        navigate('/auth/reset-sent')
    }
    
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex-grow-1 flex flex-column gap-3 align-items-center"
        >
            <p
                className="w-8 m-0 text-center"
            >
                {message('auth.reset.message')}
            </p>
            <MInputText 
                form={form}
                label={message('auth.reset.email.label')}
                name="email"
                inputMode="email"
                keyfilter="email"
                wrapperClassName="w-8"
            />
            <SubmitButton 
                rounded
                label={getMessage('auth.reset.submit')}
                className="w-8 bg-white text-primary"
            />
            <div
                className="w-8 flex justify-content-center align-items-end flex-grow-1"
            >
                <Link
                    to="/auth/login"
                    className="text-white mb-4"
                >
                    {message('auth.reset.login')}
                </Link>
            </div>
        </form>
    )
}