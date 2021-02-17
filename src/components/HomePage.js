import Slider from './Slider.js';
import HomeCard from './HomeCard.js';
import {Button, Icon} from 'react-materialize';


const HomePage = () => {

    return (
        <>
         <div className="home-title">
            <h2>Take control of your business</h2>
            <h5>Visualize the way you manage inventory and ordering. </h5>
            <Button className="home-title-btn deep-orange lighten-1"
                large
                node="a"
                waves="light"
            >
                Learn More
                <Icon right>
                send
                </Icon>
            </Button>
         </div>
            <Slider/>
            <HomeCard/>
        </>
    )
}

export default HomePage;