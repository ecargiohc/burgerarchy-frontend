
import React from 'react';

export default function Revew(props) {
    return(
        <li>
            restaurant: {props.restaurant}
            title: {props.title} 
            describe: {props.description}
            score: {props.score}
        </li>
    )
}