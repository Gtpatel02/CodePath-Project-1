import React from "react";

const Restaurant = (props) => {

    return (
        <div>
            <img src={props.image} alt={props.restaurant} />
            <h1>{props.restaurant}</h1>
            <p>{props.type}</p>
            <a href={props.menu}>
                <button>View Site</button>
            </a>
        </div>
    )
}

export default Restaurant;
