import { IInputBase } from "@models"
import { FC, HTMLInputTypeAttribute } from "react"
import { MInputBase } from "./MInputBase";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils";
import { useBreakpoints } from "@hooks";


export const MInputText : FC<IInputText> = (props) => {

    const { isDesktop, isMobile } = useBreakpoints();

    const {
        id,
        className,
        type,
        inputMode
    } = props;
    
    const classes : string = classNames(className, 'w-full', {
        'p-inputtext-lg': isDesktop,
        'p-inputtext-sm': isMobile,
    }) as string;

    return (
        <MInputBase
            {...props}
            render={({ field, fieldState }) => (
                <InputText
                    id={id ?? field.name}
                    value={field.value}
                    className={`${classes} ${classNames({ 'p-invalid': fieldState.error })}`}
                    onChange={(e) => field.onChange(e.target.value)}
                    onBlur={field.onBlur}
                    type={type}
                    inputMode={inputMode}
                />
            )}
        />
    )
}

export type InputMode = "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";

interface IInputText extends IInputBase {
    type?: HTMLInputTypeAttribute;
    inputMode?: InputMode;
}