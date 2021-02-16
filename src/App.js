import './App.css';
import NavBar from './components/NavBar.js';
import Slider from './components/Slider.js';
import { Container, Row, Col } from 'react-materialize';


function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
            <Slider/>
        </Row>
      </Container>
   </>
  );
}

export default App;
