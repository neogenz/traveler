import * as React from "react";
import {Box, Grid, Typography} from "@material-ui/core";
import {AirplanemodeActive} from "@material-ui/icons";

export class TransportCardItem extends React.Component {

    public render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> {
        return (
            <Grid container>
                <Grid item sm={12}>
                    <Box textAlign="center">
                        <AirplanemodeActive style={{fontSize: "4rem", marginBottom: ".5rem"}}/>
                    </Box>
                </Grid>
                <Grid container justify="center">
                    <Grid item sm={5}>
                        <Box component="div" display="flex" alignItems="center">
                            <Box mr=".5rem">
                                <Typography variant="h6" className="from-label">From:</Typography>
                            </Box>
                            <Box fontStyle="italic">
                                <Typography variant="body1">Geneva Airport</Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm={5}>
                        <Box component="div" display="flex" alignItems="center">
                            <Box mr=".5rem">
                                <Typography variant="h6" className="from-label">To:</Typography>
                            </Box>
                            <Box fontStyle="italic">
                                <Typography variant="body1">New York City</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}
