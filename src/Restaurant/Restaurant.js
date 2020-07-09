import React from 'react';

const Restaurant = (props) => {
    return(
        <div className="card">
            <div className="restaurant-logo">
                <img src={props.img} alt={props.name} />
            </div>
            <div className="restaurant-name">
                {props.name}
            </div>
        </div>
    )
}
export default Restaurant;
