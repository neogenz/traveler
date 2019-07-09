import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export class LodgingCard extends React.Component{
    render(){
        return (
            <Card >
                <CardContent>
                    <Typography variant="h5" component="h5">
                        LODGING
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">See more</Button>
                </CardActions>
            </Card>
        );
    }
}