import React from "react";
import "../assets/styles/components/ReportUploadResource.css";

const ReportUploadResource = () => (
  <div className="ReportUploadResource__container">
    <h3>Archivos adjuntos</h3>
    <legend>Imagen</legend>
    <input id="UploadImage" className="uploadBtn" type="file" />
    <h3>Firma</h3>
    <canvas height="100px"></canvas>
  </div>
);

export default ReportUploadResource;
