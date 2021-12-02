import "./index.css";
import * as React from "react";
import {
    AppBar,
    Toolbar,
    CssBaseline,
    useScrollTrigger,
} from "@material-ui/core";
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function ElevationScroll(props: Props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

/**
 * navigation bar elements
 * @returns NavigationBar UI elements
 */
const NavigationBar = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll>
                <AppBar id="appbar-navbar">
                    <Toolbar id="toolbar-navbar">
                        <div id="establishments-logo" style={{ height: "2.4rem", width: "2.4rem" }}>
                            <PersonPinCircleIcon id="logo" style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div id="page-name" className={"headerFont"}>
                            Tourist Guide
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </React.Fragment>
    );
};

export default NavigationBar;