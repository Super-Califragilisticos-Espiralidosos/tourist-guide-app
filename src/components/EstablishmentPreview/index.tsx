import Establishment from "../../types/Establishment";
import { Container, Grid } from "@material-ui/core";
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Link } from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import React from "react";
import './index.css';

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
            <Container id="establishments-container">
                <div id="establishments-container-preview">
                    <Grid id="establishments-grid-container" container>
                        <Grid id="establishments-grid-item" item xs={12} sm={12} md={12}>
                            <Link id="link-to-establishment" to={`/establishment?id=${props.establishment._id}`} style={{ textDecoration: 'none' }}>
                                <div id="establishments-preview" className={"one"}>
                                    <div id="establishments-preview-info" className={"two"}>
                                        <div id="establishments-image" className={"three"}>
                                            <img className="icon" src={imageUrl} alt={props.establishment.titulo} />
                                        </div>
                                        <p id="establishments-type" className={"six"}>
                                            {type}
                                        </p>
                                        <div id="establishments-name" className={"seven"}>
                                            {name}
                                        </div>
                                    </div>
                                    <div id="establishments-preview-info-2" className={"four"}>
                                        <div id="establishments-schedule" className={"five"}>
                                            <ScheduleIcon id="schedule"/>
                                            {schedule}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default EstablishmentPreview;