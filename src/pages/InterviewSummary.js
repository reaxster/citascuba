import React, { useEffect, useState } from "react";
import Loading from "../components/loading/Loading";
import ReportedVisas from "../components/interviewSumary/ReportedVisas";
import { MDBContainer } from "mdbreact";
import axios from "axios";
import InterviewSummaryNotes from "../components/interviewSumary/InterviewSummaryNotes";

const InterviewSummary = () => {
  console.log("--------------RENDERING INTERVIEW SYMMARY PAGE--------------");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(process.env.REACT_APP_BACKEND_URL + "/cases/summary");

  useEffect(() => {
    let componentIsMounted = true;
    const getAll = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_BACKEND_URL + "/cases/summary"
        );
        console.log("CASES HAS BEEN RETRIEVED - SUMMARY INTERVIEWS");

        if (componentIsMounted) {
          setData(res.data);
          setLoading(false);
        }
      } catch (err) {
        // Handle Error Here
        console.log("ERROR: CASES HAS NOT BEEN RETRIEVED - SUMMARY INTERVIEWS");
        console.error(err);
      }
    };
    getAll();
    return () => (componentIsMounted = false);
  }, []);

  let reportedVisa = <Loading />;

  if (!loading)
    reportedVisa = data.map((item) => (
      <ReportedVisas data={item} key={item._id} />
    ));

  return (
    <MDBContainer className="jumbotron  mt-5">
      <h1 className="mb-5">Resumen de Entrevistas</h1>
      <InterviewSummaryNotes />
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {reportedVisa}
      </div>
    </MDBContainer>
  );
};

export default InterviewSummary;
