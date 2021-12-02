import "./index.css";
import Establishment from "../../types/Establishment";
import React from "react";
import { Grid } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PhoneIcon from '@material-ui/icons/Phone';
import LanguageIcon from '@material-ui/icons/Language';

interface EstablishmentInfoProps {
  establishment: Establishment;
}

/**
 * Product info elements
 * @returns ProductInfo UI elements
 */
const EstablishmentInfo: React.FC<EstablishmentInfoProps> = (props) => {
  return (
    <div id="container-establishment-info" className="three-i">
      <Grid id="grid-container-establishment" container className="four-i">
        <Grid id="grid-item-establishment-1" item xs={12} sm={12} md={12} className="five-i">
          <div id="establishment-info" className="six-i">
            <div id="establishment-title" className="seven-i">
              {props.establishment.titulo}
            </div>
            <div id="establishment-image-containner" className="eight-i">
              <div id="establishment-image" style={{ margin: "1px" }}>
                <img id="image" className="image" src={props.establishment.imagen} alt={props.establishment.titulo} />
              </div>
            </div>
            <div id="establishment-info-info-info" className="nine-i">
              <div id="establishment-info-info" className={"eleven-i"}>
                <Grid id="establishment-info-container" container spacing={3}>
                  <Grid id="grid-item-establishment-2" item xs={6} style={{ borderRight: "2px solid #eee" }}>
                    <div id="establishment-type" className="twelve-i">
                      {props.establishment.tipo}: <br />
                    </div>
                    <div id="establishment-description" className="ten-i">
                      {props.establishment.descripcion} <br />
                    </div>
                  </Grid>
                  <Grid id="grid-item-establishment-3" item xs={6} style={{ textAlign: "right", marginBottom: "auto", marginTop: "auto" }}>
                    <div id="establishment-schedule" className="io">
                      <AccessTimeIcon id="info" />
                      {props.establishment.horario}<br />
                    </div>
                    <div id="establishment-phone" className="io">
                      <PhoneIcon id="info" />
                      {props.establishment.telefono}<br />
                    </div>
                    <div id="establishment-webpage" className="io">
                      <LanguageIcon id="info" />
                      {props.establishment.pagina}<br />
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
            <div>
              {/* TO DO 
              GOOGLE MAPS API */}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default EstablishmentInfo;