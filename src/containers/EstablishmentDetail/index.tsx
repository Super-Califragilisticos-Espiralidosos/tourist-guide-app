import React from "react";
import EstablishmentInfo from "../../components/EstablishmentInfo";
import EstablishmentService from "../../services/EstablishmentService";
import Establishment from "../../types/Establishment";

interface EstablishmentState {
    establishment: Establishment;
}

/**
 * Product Detail Container
 * @extends {Component<Props, State>}
 */
class EstablishmentDetail extends React.Component<{}, EstablishmentState> {
    state = {
        establishment: {} as Establishment,
    }

    /**
     * Renders the container.
     * @return {any} - HTML markup for the container
     */
    render() {
        return (
            <EstablishmentInfo establishment={this.state.establishment} />
        )
    }

    componentDidMount() {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const establishmentId = String(urlParams.get('id'));
        console.log(establishmentId)
        EstablishmentService.get(establishmentId)
            .then(response => {
                const establishment = response.data.data;
                this.setState({ establishment });
            }).catch(error => {
                console.log(error);
            });
    }
}

export default EstablishmentDetail;