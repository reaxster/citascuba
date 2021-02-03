import React from "react";
import ReportedVisaFeed from "../Utils/ReportedVisaFeed";
import ReportedVisas from "../components/ReportedVisas";

export default () => {
  const reportedVisa = ReportedVisaFeed.data.map((data) => (
    <ReportedVisas data={data} />
  ));
  return (
    <div>
      <h1>Waiing Time Page Comes Here</h1>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {reportedVisa}
      </div>
    </div>
  );
};
