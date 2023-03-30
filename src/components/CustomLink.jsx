import { Link, useMatch } from "react-router-dom";

const CustomLink = ({children, to, ...props}) =>{

    const match = useMatch(to);

    return (
        <Link 
            to={to}
            style={{
                color: match ? 'var(--color-active)' : 'white',
                textDecoration: "none",
                margin: "5px",
                fontSize: "1.5rem",
                padding: "20px",
            }}
            {...props}
        >
            {children}
        </Link>
    )
}

export { CustomLink };