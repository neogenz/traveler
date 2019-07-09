import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export class TransportItem extends React.Component{
    render(){
        return (
            <Card >
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        TRANSPORT
                    </Typography>
                    <Typography variant="h5" component="h2">
                        Avion
                    </Typography>
                    <Typography color="textSecondary">
                        Swiss Air
                    </Typography>
                    <Typography variant="body2" component="p">
                        Note to myself : think to put ecig in my big luggage
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">See more</Button>
                </CardActions>
            </Card>
        );
    }
}