import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import HomePage from './components/HomePage.js';
import ContactForm from './components/ContactForm';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import MobileDashboard from './components/MobileDashboard';
import Dashboard from './components/Dashboard';
import EditPage from './components/EditPage';

function App() {
  return (
    <BrowserRouter>
        <div >
          <NavBar/>
          <div className="main-container">
          <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/contact">
                <ContactForm/>
              </Route>
              <Route exact path="/login">
                <LoginForm/>
              </Route>
              <Route exact path="/register">
                <RegisterForm/>
              </Route>
              <Route exact path="/Dashboard">
                <MobileDashboard/>
                <Dashboard/>
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

export default App;
