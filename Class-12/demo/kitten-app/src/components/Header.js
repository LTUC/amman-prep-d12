import {Link} from 'react-router-dom';

function Header(){
    return(
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
        </nav>
        </>
    )
}

export default Header;