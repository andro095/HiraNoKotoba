

export interface ILoginForm {
    email: string;
    password: string;
    rememberMe: boolean;
}

export interface IRegisterForm {
    email: string;
    password: string;
    confirmPassword: string;
    name: string;
    lastName: string;
}

export interface IResetPasswordForm {
    email: string;
}