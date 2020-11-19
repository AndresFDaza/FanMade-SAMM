import React, { useState } from "react";
import "../assets/styles/components/NewReportWindow.css";

const NewReportWindow = ({ children }) => {
  const initialStateValues = {};

  const [values, setValues] = useState({ initialStateValues });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <form className="NewReportWindow__wrapper" onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default NewReportWindow;
