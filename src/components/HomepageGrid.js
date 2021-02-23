import {Collection, CollectionItem, Icon} from "react-materialize";

const data = [{
   alt: "Shirts category",
   src: "https://res.cloudinary.com/dliczkabg/image/upload/v1614010548/stokd-icons/tshirt.png",
   title: "Shirts",
   featured: "Black Shirt Limited Edition",
   total: "192",

},
{
   alt: "Skirt category",
   src: "https://res.cloudinary.com/dliczkabg/image/upload/v1614010548/stokd-icons/skirt.png",
   title: "Skirts",
   featured: "Pink Skirt Summer",
   total: "280",

  },
{
   alt: "Shoes category",
   src: "https://res.cloudinary.com/dliczkabg/image/upload/v1614010548/stokd-icons/shoes.png",
   title: "Shoes",
   featured: "Nike Shoes Air Jordan",
   total: "300",  
}]


const itemList = data.map(item => { return(

    <CollectionItem className="avatar" key = {Math.random()}>
    <img
    alt={item.alt}
    className="circle"
    src={item.src}
    />
    <span className="title">
    {item.title}
    </span>
    <p style={{width: '95%'}}>
    <b>Featured product:</b> {item.featured}
    <br />
    <b>Total products:</b> {item.total}
    </p>
    <a href="#/"
    className="secondary-content"
    >
    <Icon>
        edit
    </Icon>
    </a>
</CollectionItem>
)
})

const HomepageGrid = () => {
    return (
        <Collection>
           {itemList}
        </Collection>
    )
}

export default HomepageGrid;