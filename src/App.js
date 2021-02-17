import './App.css';
import NavBar from './components/NavBar.js';
import Slider from './components/Slider.js';
import { Container, Row, Col } from 'react-materialize';
import HomePage from './components/HomePage.js';


function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
            <HomePage/>
        </Row>
      </Container>
   </>
  );
}

export default App;
