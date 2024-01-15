import {type FC, type ElementType, type ComponentPropsWithoutRef} from 'react'

type ButtonProps = {
    elem: 'button'
} & React.ComponentPropsWithoutRef<'button'>

type AnchorProps = {
    elem: 'a'
} & React.ComponentPropsWithoutRef<'a'>

const Button: FC<ButtonProps | AnchorProps> = (props: ButtonProps | AnchorProps) => {
    if (props.elem === 'a') {
        return (<a className="button"{...props}></a>)
    }
    return (
        <button className="button"{...props}></button>
    )
}

export default Button