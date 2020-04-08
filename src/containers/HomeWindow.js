import React from 'react';
import Grid from "@material-ui/core/Grid";
import SideDrawer from "../components/SideDrawer";
import MessageWindow from "./MessageWindow";

function HomeWindow() {
    return (
        <div>
            <Grid container xs={12}>
                <Grid container xs={1}    >
                    <SideDrawer>

                    </SideDrawer>
                </Grid>
                <Grid container xs={11}>
                    <MessageWindow />
                    {/*<Routes />*/}
                    {/*<LoginWindow />*/}
                </Grid>
            </Grid>
        </div>
    );
}

export default HomeWindow;