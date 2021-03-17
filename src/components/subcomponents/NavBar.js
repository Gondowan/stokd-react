import { Navbar, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from './stokd-logo.png';
import { signOut } from '../../actions/index';

const NavBar = (props) => {  
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
                    <Link  to="/dashboard">{props.isSignedIn === true ? 'Dashboard' : null }</Link>
                    <Link to="/contact">Get in touch</Link>
                    <Link to="/" onClick={props.signOut}>{!props.isSignedIn === true ? null : 'Logout'}</Link>
                    <Link to="/login">{props.isSignedIn === true ? null : 'Login'}</Link>
                    <Link to="/register">{props.isSignedIn === true ? null : 'Create account'}</Link>
                </div>
            }
        >  
            <Link to="/dashboard">{props.isSignedIn === true ? 'Dashboard' : null }</Link>
            <Link to="/contact">Get in touch</Link>
            <Link to="/" onClick={props.signOut}>{!props.isSignedIn === true ? null : 'Logout'}</Link>
            <Link to="/login">{props.isSignedIn === true ? null : 'Login'}</Link>
            <Link to="/register">{props.isSignedIn === true ? null : 'Create account'}</Link>
        </Navbar>
    )
}
const mapStateToProps = (state) =>{
    return { isSignedIn: state.auth.isSignedIn, signOut: state.signOut };
}
export default connect(mapStateToProps, {signOut})(NavBar);