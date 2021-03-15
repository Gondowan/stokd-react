import { Carousel } from 'react-materialize';

const Slider = () => {

    return (
        <div
            className="s12 m10 l8 xl6 carousel z-depth-5"
        >
            <Carousel
                carouselId="Carousel-2"
                images={[
                    'https://res.cloudinary.com/dliczkabg/image/upload/v1614094192/stokd-icons/feat_inventory_nc8zdy.jpg',
                    'https://res.cloudinary.com/dliczkabg/image/upload/v1614094192/stokd-icons/Inventory-Management-02_bnpkbz.png',
                    'https://res.cloudinary.com/dliczkabg/image/upload/v1614094192/stokd-icons/InventoryManagement_Hero_3x_1_s0hdwy.png'
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