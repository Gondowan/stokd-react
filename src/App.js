import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './components/subcomponents/NavBar';
import HomePage from './components/pages/HomePage';
import ContactForm from './components/pages/ContactForm';
import LoginForm from './components/pages/LoginForm';
import RegisterForm from './components/pages/RegisterForm';
import MobileDashboard from './components/subcomponents/MobileDashboard';
import Dashboard from './components/pages/Dashboard';
import EditPage from './components/pages/EditPage';
import { connect } from 'react-redux';

const App = (props) => {
  return (
    <BrowserRouter>
        <div >
          <NavBar/>
          <div className="main-container">
          <Switch>
              <Route exact path="/">
                {props.isSignedIn ? <Dashboard/> : <HomePage />}
              </Route>
              <Route exact path="/contact">
                <ContactForm/>
              </Route>
              <Route exact path="/login">
                {props.isSignedIn ? <Redirect to="/dashboard" /> : <LoginForm />}
              </Route>
              <Route exact path="/register">
                {props.isSignedIn ? <Redirect to="/" /> : <RegisterForm />}
              </Route>
              <Route exact path="/Dashboard">
                {props.isSignedIn ? <MobileDashboard/> : <Redirect to="/" />}
                {props.isSignedIn ? <Dashboard/> : <Redirect to="/" />}
              </Route>
              <Route exact path="/products/:id">
                <EditPage />
              </Route>
          </Switch>
          </div>
        </div>
      </BrowserRouter>
  );
}
const mapStateToProps = (state) =>{
  return { isSignedIn: state.auth.isSignedIn };
}
export default connect(mapStateToProps)(App);
