import React, {Component} from 'react';
import ReviewForm from '../Review/ReviewForm';
import Restaurant from './Restaurant';

const BURGER_URL = `http://localhost:3000/api/v1/restaurants`;

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
    
    render() {
console.log(this.state);
console.log(this.state.data);
        return(
            <div>
                <ul id="restaurant-list">
                    {this.state.restaurants.map((d) => (
                        <Restaurant key={d.id} name={d.name} img={d.image_url}/>

                    ))}
                </ul>
            </div>
        )
    }
}
export default Restaurants;
