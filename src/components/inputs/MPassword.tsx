import { IInputBase } from "@models"
import { MInputBase } from "./MInputBase"
import { FC } from "react";
import { Password } from "primereact/password";
import { classNames } from "primereact/utils";
import { useBreakpoints } from "@hooks";


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
            render={({ field, fieldState }) => (
                <Password
                    toggleMask
                    inputId={id ?? field.name}
                    value={field.value}
                    inputClassName="w-full"
                    className={`${classes} ${classNames({ 'p-invalid': fieldState.error })}`}
                    onChange={(e) => field.onChange(e.target.value)}
                    onBlur={field.onBlur}
                    feedback={feedback}
                />
            )}
        />
    )
}

interface IPassword extends IInputBase {
    feedback?: boolean;
}