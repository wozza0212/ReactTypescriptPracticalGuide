type InputProps = {
    label: string;
    id: string;
}




const Input = ({label, id}: InputProps) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input />
        </div>
    )
}

export default Input