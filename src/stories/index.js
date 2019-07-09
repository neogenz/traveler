import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import {Button, Welcome} from '@storybook/react/demo';
import {ActivitiesCard} from "../travels/Activities-card";
import {LodgingCard} from "../travels/Lodging-card";
import {OrdersCard} from "../travels/Orders-card";
import {TransportsCard} from "../travels/Transports-card";
import {PlanningCard} from "../travels/Planning-card";
import {TravelDashboard} from "../travels/Travel-dashboard";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {CssBaseline} from "@material-ui/core";
import 'typeface-roboto';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')}/>);

storiesOf('Button', module)
    .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
    .add('with some emoji', () => (
        <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
        </Button>
    ));

storiesOf('Activities', module)
    .add('card', () => <ActivitiesCard/>);

storiesOf('Lodging', module)
    .add('card', () => <LodgingCard/>);

storiesOf('Orders', module)
    .add('card', () => <OrdersCard/>);

storiesOf('Transports', module)
    .add('card', () => (
        <div>
            <CssBaseline/>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TransportsCard/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    ));

storiesOf('Planning', module)
    .add('card', () => <PlanningCard/>);

storiesOf('Dashboard', module)
    .add('default', () => <TravelDashboard/>);
