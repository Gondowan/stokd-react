import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import { Container, Row} from 'react-materialize';
import HomePage from './components/HomePage.js';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Row className="center">
          <Container>
            <Route path="/">
              <HomePage />
            </Route>
          </Container>
        </Row>
      </Switch>
   </BrowserRouter>
  );
}

export default App;
