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
    <div className="three-i">
      <Grid container className="four-i">
        <Grid item xs={12} sm={12} md={12} className="five-i">
          <div className="six-i">
            <div className="seven-i">
              {props.establishment.titulo}
            </div>
            <div className="eight-i">
              <div style={{ margin: "1px" }}>
                <img className="image" src={props.establishment.imagen} alt={props.establishment.titulo} />
              </div>
            </div>
            <div className="nine-i">
              <div className={"eleven-i"}>
                <Grid container spacing={3}>
                  <Grid item xs={6} style={{ borderRight: "2px solid #eee" }}>
                    <div className="twelve-i">
                      {props.establishment.tipo}: <br />
                    </div>
                    <div className="ten-i">
                      {props.establishment.descripcion} <br />
                    </div>
                  </Grid>
                  <Grid item xs={6} style={{ textAlign: "right", marginBottom: "auto", marginTop: "auto" }}>
                    <div className="io">
                      <AccessTimeIcon id="info" />

                      {props.establishment.horario}<br />
                      {/* <div class="d-flex flex-row bd-highlight mb-3"> */}
                    </div>
                    <div className="io">
                      <PhoneIcon id="info" />
                      {props.establishment.telefono}<br />
                    </div>
                    <div className="io">
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