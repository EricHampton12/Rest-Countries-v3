import React from "react";
import "./styles.css";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="container__notFound">
        <img
          className="word__notFound"
          src="https://humbledave42.files.wordpress.com/2018/03/best-404-page-design5.png?w=1000&h=619&crop=1"
          alt=""
        />
      </div>
      <h1>Country Not found</h1>
    </div>
  );
};

export default NotFound;
