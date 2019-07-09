import * as React from "react";
import './Header.css';
import Toolbar from "@material-ui/core/Toolbar";
import {Button, IconButton} from "@material-ui/core";
import MenuIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

export class Header extends React.Component {

    public render() {
        return (
            <AppBar position="static" className="app-bar">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        );
    }
}
