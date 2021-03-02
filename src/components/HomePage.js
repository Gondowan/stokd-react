import Slider from './Slider.js';
import HomeCard from './HomeCard.js';
import { Button, Icon, CardPanel } from 'react-materialize';
import { Link } from 'react-router-dom';
import HomepageTabs from './HomepageTabs.js';


const HomePage = () => {

    return (
        <div>
            <div className="home-title">
                <video autoPlay muted loop id="myVideo">
                    <source src="https://res.cloudinary.com/dliczkabg/video/upload/v1614708923/videos/production_ID_4281239_ftjn1g.mp4" type="video/mp4" />
                </video>
                <div className="heading">
                    <h1>Take control of your business</h1>
                    <h5>Visualize the way you manage inventory and ordering. </h5>
                    <Link to="/contact" className="btn btn-large home-title-btn deep-orange lighten-1 hoverable">
                        Learn more
                        <Icon right>
                        send
                        </Icon>
                    </Link>
                </div>
            </div>
        <div className="App">
            {/* <Slider/> */}
            <HomeCard/>
            <div className="home-card">
            <h1>Easy to access inventory dashboard</h1>
            <HomepageTabs/>
            </div>
            <CardPanel className="deep-orange lighten-5 left-align card-panel">
                <h5>Any questions or doubts?</h5>
                <h6>Feel free to contact us and discover a new way to take control of your business</h6>
                <Button className="home-title-btn deep-orange lighten-1 hoverable"
                    large
                    node="a"
                    waves="light"
                >
                    Learn More
                    <Icon right>
                    perm_phone_msg
                    </Icon>
                </Button>
            </CardPanel>
        </div>
    </div>
    )
}

export default HomePage;