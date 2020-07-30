import React, {Component} from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "", 
            description: "",
            score: 0
        }
    }

    render() {
        return(
            <div>
                <p>REVIEW FORM</p>
            </div>
        )
    }

}
export default ReviewForm;
