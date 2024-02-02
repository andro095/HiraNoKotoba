import { CSSProperties, ReactElement, ReactNode } from "react";
import { ControllerFieldState, ControllerRenderProps, UseFormReturn, UseFormStateReturn } from "react-hook-form";

export interface IInputBase {
    form: UseFormReturn<any>;
    label: string | ReactNode;
    name: string;
    className?: string;
    id?: string;
    placeholder?: string;
    style?: CSSProperties;
    wrapperClassName?: string;
    wrapperStyle?: CSSProperties;
}

export interface IRenderComponent {
    render: (props: IRender) => ReactElement;
}

interface IRender {
    field: ControllerRenderProps;
    fieldState: ControllerFieldState;
    formState: UseFormStateReturn<Record<string, unknown>>;
}