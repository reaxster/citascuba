import React from "react";
import ReportedVisas from "../components/ReportedVisas";
import ReportedVisaFeed from "../Utils/ReportedVisaFeed";
import WaitingTimePAge from "./WaitingTimePAge";

export default () => {
  const reportedVisa = ReportedVisaFeed.data.map((data) => (
    <ReportedVisas data={data} />
  ));
  return (
    <div>
      <h1>Home Page Comes Here</h1>
      <WaitingTimePAge />
    </div>
  );
};
