import { ReactNode } from "react"

type HeaderProps = {
    image: string,
    children: ReactNode
}


const Header = ({image, children} : HeaderProps) => {
    return (
        <div>
            <img src={image} alt="logo" />
            <h1>{children}</h1>
        </div>
    )
}

export default Header