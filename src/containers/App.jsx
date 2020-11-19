import React from "react";
import Header from "../components/Header";
import BandejaOptions from "../components/BandejaOptions";
import ReportsContainer from "../components/ReportsContainer";
import ReportItem from "../components/ReportItem";
import NewReportWindow from "../components/NewReportWindow";
import ReportGeneralInformation from "../components/ReportGeneralInformation";
import ReportServiceTracking from "../components/ReportServiceTracking";
import ReportUploadResource from "../components/ReportUploadResource";
import NewReportButtons from "../components/NewReportButtons";

import "../assets/styles/App.css";

const App = () => {
  return (
    <div className="App">
      <Header title="Bandeja de Servicios" />
      <ReportsContainer>
        <ReportItem />
        <ReportItem />
        <ReportItem />
        <ReportItem />
        <ReportItem />
        <BandejaOptions />
      </ReportsContainer>
      <NewReportWindow>
        <Header title="Reportar" />
        <ReportGeneralInformation />
        <ReportServiceTracking />
        <ReportUploadResource />
        <NewReportButtons />
      </NewReportWindow>
    </div>
  );
};

export default App;
