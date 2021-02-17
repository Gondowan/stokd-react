import { Carousel } from 'react-materialize';

const Slider = () => {

    return (
        <div
            className="s12 m10 l8 xl6 carousel z-depth-5"
        >
            <Carousel
                carouselId="Carousel-2"
                images={[
                    'https://image.freepik.com/free-vector/inventory-management-isometric-illustration_1124-929.jpg',
                    'https://image.freepik.com/free-vector/inventory-management-isometric-illustration_1124-929.jpg',
                    'https://image.freepik.com/free-vector/inventory-management-isometric-illustration_1124-929.jpg'
                ]}
                options={{
                    fullWidth: true,
                    indicators: true
                }}
            />
        </div>
        )
}

export default Slider;