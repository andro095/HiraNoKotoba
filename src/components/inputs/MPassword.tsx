// * React Libraries
import { FC } from "react";

// * Third Party Libraries
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";

// * Hooks
import { useBreakpoints } from "@hooks";

// * Modelos
import { IInputBase } from "@models";

// * Components
import { MInputBase } from "./MInputBase";

export const MPassword : FC<IPassword> = (props) => {

    const { isDesktop, isMobile } = useBreakpoints();

    const {
        id,
        className,
        feedback
    } = props;

    const classes : string = classNames(className, 'w-full', {
        'p-inputtext-lg': isDesktop,
        'p-inputtext-sm': isMobile,
    }) as string;

    return (
        <MInputBase 
            {...props}
        >
            {
                ({ field, fieldState }) => (
                    <Password 
                        {...field}
                        toggleMask
                        inputClassName="w-full"
                        inputId={id ?? field.name}
                        className={`${classes} ${classNames({ 'p-invalid': fieldState.error })}`}
                        feedback={feedback}
                    />
                )
            }   
        </MInputBase>
    )
}

interface IPassword extends IInputBase {
    feedback?: boolean;
}