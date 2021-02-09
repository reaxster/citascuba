import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ReportedVisas from "../components/ReportedVisas";
import { MDBContainer } from "mdbreact";
import axios from "axios";

const InterviewSummary = () => {
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

        if (componentIsMounted) {
          setData(res.data);
          setLoading(false);
        }
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };
    getAll();
    return () => (componentIsMounted = false);
  }, []);

  let reportedVisa = <Loading />;

  if (!loading)
    reportedVisa = data.map((item) => (
      <ReportedVisas data={item} key={item.id} />
    ));

  return (
    <MDBContainer className="jumbotron  mt-5">
      <h1>Waiing Time Page Comes Here</h1>
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {reportedVisa}
      </div>
    </MDBContainer>
  );
};

export default InterviewSummary;
