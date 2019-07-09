import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import {CssBaseline} from "@material-ui/core";
import {TravelDashboard} from "./travels/Travel-dashboard";
import {Header} from "./core/header/Header";
import 'typeface-roboto';

const App: React.FC = () => {
    return (
        <div>
            <CssBaseline/>
            <Header/>
            <Container>
                <TravelDashboard/>
            </Container>
        </div>
    );
};

export default App;
