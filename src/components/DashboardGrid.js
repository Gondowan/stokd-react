import {Collection, CollectionItem, Icon} from "react-materialize";


const DashboardGrid = () => {
    return (
            <Collection>
                <CollectionItem className="avatar">
            <img
            alt=""
            className="circle"
            src="https://img.icons8.com/pastel-glyph/2x/t-shirt--v3.png"
            />
            <span className="title">
            Shirts
            </span>
            <p>
            <b>Featured product:</b> Black Shirt Limited Edition
            <br />
            <b>Total products:</b> 192
            </p>
            <a
            className="secondary-content"
            href="javascript:void(0)"
            >
            <Icon>
                edit
            </Icon>
            </a>
        </CollectionItem>
        <CollectionItem className="avatar">
            <Icon className="circle">
            folder
            </Icon>
            <span className="title">
            Title
            </span>
            <p>
            First Line 
            <br />
            Second Line
            </p>
            <a
            className="secondary-content"
            href="javascript:void(0)"
            >
            <Icon>
                edit
            </Icon>
            </a>
        </CollectionItem>
        <CollectionItem className="avatar">
            <Icon className="circle green">
            insert_chart
            </Icon>
            <span className="title">
            Title
            </span>
            <p>
            First Line 
            <br />
            Second Line
            </p>
            <a
            className="secondary-content"
            href="javascript:void(0)"
            >
            <Icon>
                grade
            </Icon>
            </a>
        </CollectionItem>
        <CollectionItem className="avatar">
            <Icon className="circle red">
            play_arrow
            </Icon>
            <span className="title">
            Title
            </span>
            <p>
            First Line 
            <br />
            Second Line
            </p>
            <a
            className="secondary-content"
            href="javascript:void(0)"
            >
            <Icon>
                grade
            </Icon>
            </a>
        </CollectionItem>
        </Collection>
    )
}

export default DashboardGrid;