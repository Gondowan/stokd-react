import Slider from './Slider.js';
import HomeCard from './HomeCard.js';
import {Button, Icon} from 'react-materialize';
import HomepageTabs from './HomepageTabs.js';


const HomePage = () => {

    return (
        <>
         <div className="home-title">
            <h1>Take control of your business</h1>
            <h5>Visualize the way you manage inventory and ordering. </h5>
            <Button className="home-title-btn deep-orange lighten-1 z-depth-5"
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
            <div className="home-card">
            <h1>Easy to access inventory dashboard</h1>
            </div>
            <HomepageTabs/>
            <Button className="contact-btn deep-orange lighten-1 z-depth-5"
                large
                node="a"
                waves="light"
            >
                Learn More
                <Icon right>
                perm_phone_msg
                </Icon>
            </Button>
        </>
    )
}

export default HomePage;