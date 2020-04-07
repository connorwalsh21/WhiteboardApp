import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./containers/LoginWindow";
import MessageWindow from "./containers/ContentWindow";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";

export default function Routes({ appProps }) {
    return (
        <Switch>
            <AppliedRoute path="/" exact component={Login} appProps={appProps} />
            <AppliedRoute path="/message" exact component={MessageWindow} appProps={appProps} />
            {/* Finally, catch all unmatched routes */}
            <route component={NotFound} />
        </Switch>
    );
}