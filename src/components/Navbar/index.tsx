import "./index.css";
import * as React from "react";
import {
    Typography,
    AppBar,
    Toolbar,
    CssBaseline,
    useScrollTrigger,
} from "@material-ui/core";
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
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
                <AppBar>
                    <Toolbar>
                        <div style={{ height: "2.4rem", width: "2.4rem" }}>
                            <PersonPinCircleIcon style={{ height: "100%", width: "100%" }} />
                        </div>
                        <div className={"headerFont"}>
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