import React from "react";
import "../assets/styles/components/ReportServiceTracking.css";

const ReportServiceTracking = () => (
  <div className="ReportServiceTracking__container">
    <h3>Seguimiento servicio tecnico</h3>
    <div>
      <legend>Verificacion visual</legend>
      <select>
        <optgroup label="seleccione una opcion">
          <option value="Si">Si</option>
          <option value="No">No</option>
        </optgroup>
      </select>
    </div>
    <div>
      <legend>Desconexión de equipo</legend>
      <select>
        <optgroup label="seleccione una opcion">
          <option value="Si">Si</option>
          <option value="No">No</option>
        </optgroup>
      </select>
    </div>{" "}
    <div>
      <legend>Limpieza</legend>
      <select>
        <optgroup label="seleccione una opcion">
          <option value="Si">Si</option>
          <option value="No">No</option>
        </optgroup>
      </select>
    </div>
  </div>
);

export default ReportServiceTracking;
