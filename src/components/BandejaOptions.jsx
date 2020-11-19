import React from "react";
import "../assets/styles/components/BandejaOptions.css";
import iconCreate from "../assets/static/anadir.svg";
import iconSesion from "../assets/static/salir.svg";

const BandejaOptions = () => (
  <div className="bandejaOptions__container">
    <div className="bandejaOptions__button">
      <p>Crear Reporte</p>
      <img className="bandejaOptions__icon" src={iconCreate} alt="" />
    </div>
    <div className="bandejaOptions__button">
      <p> Sesión actual </p>
      <img className="bandejaOptions__icon" src={iconSesion} alt="" />
    </div>
  </div>
);

export default BandejaOptions;
