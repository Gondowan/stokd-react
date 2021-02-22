
const HomeCard = () => {

    const data = [{
        title: "Visualize your data",
        image: "https://res.cloudinary.com/dliczkabg/image/upload/v1613579149/undraw_visual_data_b1wx_1_1_yp4xk5.png",
        p1: "Get a visual rendering of all your products.",
        p2: "Control product performance and create projections based on your data",
        
    },
    {
        title: "Add, delete or update any item in your inventory",
        image: "https://res.cloudinary.com/dliczkabg/image/upload/v1613581465/homecard-product-page_hgqa1p.jpg",
        p1: "Edit any information of your own stock.",
        p2: "Manage your stock in a few steps.",

    }
    ]

    const cards = data.map(item => { return(
        <div className="home-card" key = {Math.random()}>
        <h1>{item.title}</h1>
        <img src={item.image} className="z-depth-2" alt='product'/>
        <p>{item.p1}</p>
        <p>{item.p2}</p>
        </div>
    )
})

    return(
        <>
        {cards}
        </>
    )  
      
    }

export default HomeCard;
 