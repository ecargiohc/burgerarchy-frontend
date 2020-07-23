
import React from 'react';
// import Reviews from './Reviews';

export default function Review(props) {
    return(
        <li>
            restaurant: {props.restaurant}
            title: {props.title} 
            describe: {props.description}
            score: {props.score}
        </li>
    )
}