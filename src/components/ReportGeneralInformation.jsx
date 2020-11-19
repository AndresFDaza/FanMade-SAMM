import React from "react";
import "../assets/styles/components/ReportGeneralInformation.css";

const ReportGeneralInformation = () => (
  <div className="ReportGeneralInformation__container">
    <h3>Informacion General</h3>
    <p>Fecha</p>
    <p>H. Inicio</p>
    <p>H. Final</p>
    <input type="date" defaultValue="2020-09-19" />
    <input type="time" defaultValue="08:00" />
    <input type="time" />
    <input
      className="generalInfo__use-3-columns"
      type="text"
      placeholder="Trabajos"
    />
    <input
      className="generalInfo__use-3-columns"
      type="text"
      placeholder="Recomendaciones"
    />
    <input
      className="generalInfo__use-3-columns"
      type="text"
      placeholder="Compromisos:"
    />
  </div>
);
export default ReportGeneralInformation;
