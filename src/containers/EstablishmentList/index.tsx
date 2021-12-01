import React from "react";
import EstablishmentPreview from "../../components/EstablishmentPreview";
import EstablishmentService from "../../services/EstablishmentService";
import Establishment from "../../types/Establishment";

interface ListEstablishmenState {
    establishments: Establishment[];
}

/**
 * Product List Container
 * @extends {Component<Props, State>}
 */
class EstablishmentList extends React.Component<{}, ListEstablishmenState> {
  state = {
    establishments: [] as Establishment[],
  };

  /**
   * Renders the container.
   * @return {string} - HTML markup for the container
   */
  render() {
    var establishmentsList: any[] = [];
    this.state.establishments.forEach((establishment) => {
        establishmentsList.push(<EstablishmentPreview establishment={establishment} />);
    });
    return establishmentsList;
  }

  componentDidMount() {
    EstablishmentService.getAll()
      .then((response) => {
        const establishments = response.data.data;
        console.log(establishments);
        this.setState({ establishments });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export default EstablishmentList;