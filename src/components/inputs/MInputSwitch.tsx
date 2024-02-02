import { IInputBase } from "@models"
import { InputSwitch } from "primereact/inputswitch";
import { FC } from "react"
import { Controller } from "react-hook-form";



export const MInputSwitch : FC<IInputSwitchProps> = (props) => {

    const {
        form, 
        label, 
        name, 
        wrapperClassName,
        id,
        noError = false
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
            render={({ field }) => (
                <div
                    className={wrapperClassName}
                >
                    <div className="w-full flex gap-2 align-items-center">
                        <InputSwitch 
                            id={id ?? field.name}
                            inputId={id ?? field.name}
                            checked={field.value}
                            onChange={(e) => field.onChange(e.value)}
                            inputRef={field.ref}
                        />
                        <label htmlFor={id ?? field.name}>{ label }</label>
                    </div>
                    {!noError && getFormErrorMessage()}
                </div>
            )}
        />
    )
}

interface IInputSwitchProps extends IInputBase {
    noError?: boolean;
}