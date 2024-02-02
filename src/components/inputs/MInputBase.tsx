import { IInputBase, IRenderComponent } from "@models";
import { FC } from "react";
import { Controller } from "react-hook-form"


export const MInputBase : FC<IInputBase & IRenderComponent> = (props) => {

    const { 
        render, 
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
                    <span className="p-float-label">
                        {
                            render({ field, fieldState, formState })
                        }
                        <label htmlFor={id ?? field.name}>{ label }</label>
                    </span>
                    {getFormErrorMessage()}
                </div>
            )}
        />
    )
}

