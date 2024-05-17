// * React Libraries
import { FC } from "react";

// * Third Party Libraries
import { Controller } from "react-hook-form"
import { FloatLabel } from 'primereact/floatlabel';

// * Modelos
import { IInputBase, IChildren } from "@models";

export const MInputBase : FC<IInputBase & IChildren> = (props) => {

    const { 
        children, 
        form, 
        label, 
        name, 
        wrapperClassName,
        id
    } = props;

    const {
        control,
        formState: { errors },
    } = form;

    const getFormErrorMessage = () => {
        return errors[name] ? <small className="p-error">{errors[name]?.message as string}</small> : <small className="p-error">&nbsp;</small>;
    };

    return (
        <Controller 
            name={name}
            control={control}
            render={({ field, fieldState, formState }) => (
                <div
                    className={wrapperClassName}
                >
                    <FloatLabel>
                            {children({ field, fieldState, formState })}
                            <label htmlFor={id ?? field.name}>{ label }</label>
                    </FloatLabel>
                    {getFormErrorMessage()}
                </div>
            )}
        />
    )
}

