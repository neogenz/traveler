import React from 'react';
import Grid from '@material-ui/core/Grid';
import {TransportsCard} from './Transports-card';
import {LodgingCard} from './Lodging-card';
import {PlanningCard} from './Planning-card';
import {ActivitiesCard} from './Activities-card';
import {OrdersCard} from './Orders-card';

export class TravelDashboard extends React.Component {
    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <TransportsCard/>
                </Grid>
                <Grid item xs={6}>
                    <LodgingCard/>
                </Grid>
                <Grid item xs={12}>
                    <PlanningCard/>
                </Grid>
                <Grid item xs={8}>
                    <ActivitiesCard/>
                </Grid>
                <Grid item xs={4}>
                    <OrdersCard/>
                </Grid>
            </Grid>
        );
    }
}
