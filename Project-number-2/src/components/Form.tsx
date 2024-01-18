import { useRef, type ComponentPropsWithoutRef, forwardRef, useImperativeHandle } from "react";

export type FormHandle = {
    clear: () => void;

}

type FormProps = ComponentPropsWithoutRef<"form"> & {
    onSave: (data: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(({onSave, children, ...otherProps}: FormProps, ref) => {
    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
        return {
            clear() {
                form.current?.reset();
            }
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
        form.current?.reset();
    }

    return (
        <form onSubmit={handleSubmit}{...otherProps} ref={form}>{children}</form>
    )
})

export default Form