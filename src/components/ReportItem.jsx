import React from "react";
import "../assets/styles/components/ReportItem.css";
import HospitalMeredi from "../assets/static/hospitalMeredi.jpg";

const ReportItem = () => (
  <div className="reportItem__container">
    <div className="reportItem__shortInfo">
      <h3>OTT-2265</h3>
      <p>Sab 30</p>
      <p>8:00-10:00</p>
    </div>
    <div className="reportItem__longInfo">
      <h2>Correctivo - [6011016120][BOMA DE INFUSION MP-60]</h2>
      <p> HOSPITAL UNIVERSITARIO MAYOR MEDERI - MEDERI</p>
    </div>
    <div className="reportItem__img-container">
      <img
        className="reportItem__img"
        src={HospitalMeredi}
        alt="imagen soporte"
      />
    </div>
  </div>
);

export default ReportItem;
