
import React from 'react';

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