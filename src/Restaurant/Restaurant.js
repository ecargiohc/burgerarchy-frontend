import React from 'react';
import Reviews from '../Review/Reviews.js';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Restaurant = (props) => {
    return(
        <div className="card">
            <Card>
                <CardActionArea>
                <CardContent>
                    <Typography className="restaurant-name" gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                </CardContent>
                <div className="restaurant-logo">
                    <CardMedia component="img" image={props.img} alt={props.name} title={props.name} height="250"/>
                </div>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    Rating
                    </Button>
                    <Button size="small" color="primary">
                        <Reviews />
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}
export default Restaurant;
