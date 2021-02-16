import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import CreateNews from "../components/CreateNews";
import axios from "axios";
import { MDBCol } from "mdbreact";
import Admin_EditCaseForm from "../components/ADMIN/admin_components/AdminEditCases/Admin_EditCaseForm";
export default () => {
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    let componentIsMounted = true;
    const getNews = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_BACKEND_URL + "/news"
        );
        console.log(res.data);
        if (componentIsMounted) setAllNews(res.data);
      } catch (err) {
        alert(err);
      }
    };
    getNews();
    return () => (componentIsMounted = false);
  }, []);

  let displayNews = allNews.map((item) => (
    <NewsCard key={item._id} data={item} />
  ));

  return (
    <div className="container jumbotron my-5 d-flex py-3 flex-wrap justify-content-">
      <CreateNews />
      {displayNews}
    </div>
  );
};
