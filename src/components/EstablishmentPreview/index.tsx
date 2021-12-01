import Establishment from "../../types/Establishment";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import Store from "@material-ui/icons/Store";
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Link } from "react-router-dom";

import CssBaseline from '@material-ui/core/CssBaseline';

import './index.css'
import React from "react";
import { title } from "process";

interface EstablishmentPreviewProps {
    establishment: Establishment;
}

/**
 * Product preview elements
 * @returns EstablishmentPreview UI elements
 */
const EstablishmentPreview: React.FC<EstablishmentPreviewProps> = (props) => {
    var name = "";
    if (
        props.establishment !== undefined &&
        props.establishment.titulo !== undefined
    ) {
        name = props.establishment.titulo;
    }

    var imageUrl = "";
    if (
        props.establishment !== undefined &&
        props.establishment.imagen
    ) {
        imageUrl = props.establishment.imagen;
    } else {
        imageUrl = "https://dummyimage.com/200x200/000/0011ff"
    }

    var schedule = "";
    if (
        props.establishment !== undefined &&
        props.establishment.horario !== undefined
    ) {
        schedule = props.establishment.horario;
    }

    var type = "";
    if (
        props.establishment !== undefined &&
        props.establishment.tipo !== undefined
    ) {
        type = props.establishment.tipo;
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <div>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12}>
                            <div className={"one"}>
                                <div className={"two"}>
                                    <div className={"three"}>
                                        <img className={"icon"} src={imageUrl} alt={props.establishment.titulo} />
                                    </div>
                                    <p className={"six"}>
                                        {type}
                                    </p>
                                    <div className={"seven"}>
                                       {name}
                                    </div>

                                </div>
                                <div className={"four"}>
                                    <div className={"five"}>
                                        <ScheduleIcon />
                                        {schedule}
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>


        </React.Fragment>

    );
};

export default EstablishmentPreview;