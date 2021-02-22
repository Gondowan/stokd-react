import { Carousel } from 'react-materialize';

const Slider = () => {

    return (
        <div
            className="s12 m10 l8 xl6 carousel z-depth-5"
        >
            <Carousel
                carouselId="Carousel-2"
                images={[
                    'https://cdn.dribbble.com/users/1587946/screenshots/4540652/discount_illustration0.5.png',
                    'https://www.helium10.com/app/uploads/2020/09/InventoryManagement_Hero@3x.png',
                    'https://cdn.dribbble.com/users/1658148/screenshots/5608091/guide-3.png'
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