import { useBreakpoints } from "@hooks";
import { Button, ButtonProps } from "primereact/button"
import { FC } from "react";



export const SubmitButton : FC<ISubmitButton> = (props) => {

    const { isDesktop, isMobile } = useBreakpoints();

    const size = isDesktop ? 'large' : isMobile ? 'small' : undefined;

    return (
        <Button 
            {...props}
            label={props.label as string}
            size={size}
            type="submit"
        />
    )
}

interface ISubmitButton extends Omit<ButtonProps, 'type' | 'label' | 'size'> {
    label: string | JSX.Element;
}