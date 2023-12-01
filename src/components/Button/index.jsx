import './style.css';
import { Link } from 'react-router-dom';

export const ButtonPrimary = ({src, children}) => {
    return (
        <Link className='button button--primary' to={src}>{children}</Link>
    )
}

export const ButtonSecondary = ({src, children}) => {
    return (
        <Link className='button button--secondary' to={src}>{children}</Link>
    )
}