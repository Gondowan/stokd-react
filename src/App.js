import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import HomePage from './components/HomePage.js';
import ContactForm from './components/ContactForm';


function App() {
  return (
    <BrowserRouter>
        <div >
          <NavBar/>
          <div className="App">
          <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/contact">
                <ContactForm/>
              </Route>
          </Switch>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
