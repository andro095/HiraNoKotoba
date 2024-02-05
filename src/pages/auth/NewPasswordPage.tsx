import { MPassword, SubmitButton, message } from "@components";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMessagge } from "@hooks";
import { INewPasswordForm } from "@models"
import { useMemo } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';


const initialForm: INewPasswordForm = {
    password: '',
    confirmPassword: '',
    resetPasswordToken: ''
}

export const NewPasswordPage = () => {
    const { getMessage } = useMessagge();
    const navigate = useNavigate();

    const schema = useMemo(() => {
        return yup.object({
            password: yup.string()
                .required(getMessage('auth.new-password.password.required')),
            confirmPassword: yup.string()
                .oneOf([yup.ref('password')], getMessage('auth.new-password.confirmPassword.invalid'))
                .required(getMessage('auth.new-password.confirmPassword.required')),
            resetPasswordToken: yup.string().default('')
        }).required();
    },[]);

    const form = useForm<INewPasswordForm>({
        resolver: yupResolver(schema),
        defaultValues: initialForm
    });

    const {
        handleSubmit,
    } = form;

    const onSubmit : SubmitHandler<INewPasswordForm> = (data) => {
        console.log(data);

        navigate('/auth/resetted')
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex-grow-1 flex flex-column gap-3 align-items-center"
        >
            <p
                className="w-8 m-0 text-center"
            >
                {message('auth.new-password.message')}
            </p>
            <MPassword 
                feedback
                form={form}
                label={message('auth.new-password.password.label')}
                name="password"
                wrapperClassName="w-8"
            />
            <MPassword
                form={form}
                label={message('auth.new-password.confirmPassword.label')}
                name="confirmPassword"
                wrapperClassName="w-8"
            />
            <SubmitButton 
                rounded
                label={getMessage('auth.new-password.submit')}
                className="w-8 bg-white text-primary"
            />
        </form>
    )
}