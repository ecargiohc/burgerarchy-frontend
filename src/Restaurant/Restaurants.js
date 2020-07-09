import React, {Component} from 'react';
import ReviewForm from '../Review/ReviewForm';
import Restaurant from './Restaurant';

const BURGER_URL = `http://localhost:3001/api/v1/restaurants`;
// const REVIEW_URL = `http://localhost:3001/api/v1/reviews`;

class Restaurants extends Component {
    constructor(props) {
        super(props)

        this.state = {
            restaurants: [], 
            reviews: []
        }
    }

    componentDidMount() {
        this.getRestaurants();
        // this.getReviews();
    }
    
    getRestaurants() {
        fetch(BURGER_URL)
        .then(response => response.json())
        .then(res_data => {
console.log(res_data);
            this.setState({
                restaurants: res_data
            })
        })
    }

//     getReviews() {
//         fetch(REVIEW_URL)
//         .then(response => response.json())
//         .then(res_data => {
// console.log(res_data);
//             this.setState({
//                 reviews: res_data
//             })
//         })
//     }
    
    render() {
console.log(this.state);
console.log(this.state.data);
        return(
            <div>
                {/* <ReviewForm /> */}
                <ul id="restaurant-list">
                    {this.state.restaurants.map((d) => (
                        <Restaurant key={d.id} name={d.name} img={d.image_url}/>
                        // <li key={d.id}>{d.id}: {d.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default Restaurants;
