import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>




const Input = forwardRef<HTMLInputElement, InputProps>(({label, id, ...props }, ref) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props} ref={ref} />
        </div>
    )
})

export default Input