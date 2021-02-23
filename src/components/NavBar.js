import { Navbar, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import logo from '../stokd-logo.png';

const NavBar = () => {  
    return (
        <Navbar className="deep-orange lighten-1 navbar"
            alignLinks="right"
            brand={<Link to="/" className="brand-logo"><img src={logo} alt="logo"/></Link>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
            sidenav={
                <div className="side-menu">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Create account</Link>
                    <Link to="/contact">Get in touch</Link>
                </div>
            }
        >  
            <Link to="/contact">Get in touch</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Create account</Link>

        </Navbar>
    )
}

export default NavBar;