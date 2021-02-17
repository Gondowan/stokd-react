import { Navbar, NavItem, Icon } from 'react-materialize';
import logo from '../stokd-logo.png';

const NavBar = () => {

    return (
        <Navbar className="deep-orange lighten-1"
            alignLinks="right"
            brand={<a className="brand-logo" href="#"><img src={logo}/></a>}
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
            sidenav={<li>Custom node!</li>}
        >
        <NavItem href="">
            Getting started
        </NavItem>
        <NavItem href="components.html">
            Components
        </NavItem>
        </Navbar>
    )
}

export default NavBar;