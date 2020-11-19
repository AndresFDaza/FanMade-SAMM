import React, { Children } from "react";
import "../assets/styles/components/ReportsContainer.css";

const ReportsContainer = ({ children }) => (
  <div className="reportsContainer__wrapper">{children}</div>
);

export default ReportsContainer;
