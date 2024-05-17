// * React Libraries
import { FC, HTMLInputTypeAttribute } from "react"

// * Third Party Libraries
import { InputText } from "primereact/inputtext";
import { KeyFilterType } from "primereact/keyfilter";
import { classNames } from "primereact/utils";

// * Hooks
import { useBreakpoints } from "@hooks";

// * Models
import { IInputBase } from "@models"

// * Components
import { MInputBase } from "./MInputBase";

export const MInputText : FC<IInputText> = (props) => {

    const { isDesktop, isMobile } = useBreakpoints();

    const {
        id,
        className,
        type,
        inputMode,
        keyfilter
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
                    <InputText 
                        {...field}
                        id={id ?? field.name}
                        className={`${classes} ${classNames({ 'p-invalid': fieldState.error })}`}
                        type={type}
                        inputMode={inputMode}
                        keyfilter={keyfilter}
                    />
                )
            }
        </MInputBase>
    )
}

export type InputMode = "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search";

interface IInputText extends IInputBase {
    type?: HTMLInputTypeAttribute;
    inputMode?: InputMode;
    keyfilter?: KeyFilterType;
}