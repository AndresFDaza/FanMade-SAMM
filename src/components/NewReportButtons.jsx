import React from "react";
import "../assets/styles/components/NewReportButtons.css";
import visualizeIcon from "../assets/static/ver.svg";
import uploadIcon from "../assets/static/subir.svg";

const NewReportButtons = () => (
  <div className="NewReportButtons__container">
    <div className="NewReportButtons__button">
      <p>Previsualizar</p>
      <img src={visualizeIcon} alt="visual icon" />
    </div>
    <div className="NewReportButtons__button">
      <p>Reportar</p>
      <img src={uploadIcon} alt="upload icon" />
    </div>
  </div>
);

export default NewReportButtons;
