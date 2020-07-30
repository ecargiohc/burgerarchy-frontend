import React, {Component} from 'react';


const REVIEW_URL = `http://localhost:3001/api/v1/reviews`

class Reviews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reviews: []
        }
    }

    getReviews() {
        fetch(REVIEW_URL)
        .then(response => response.json())
        .then(res_data => {
console.log(res_data);
            this.setState({
                reviews: res_data
            })
        })
    }

    render() {
        return(
            <div>
                <ul id="reviews-list">
                </ul>
            </div>
        )
    }
}
export default Reviews;