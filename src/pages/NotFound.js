import React from "react";
import "./styles.css";

const NotFound = () => {
  return (
    <div className="notFound">
      <div className="container__notFound">
        <img
          className="word__notFound"
          src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"
          alt=""
        />
      </div>
      <h1>Country Not found</h1>
    </div>
  );
};

export default NotFound;
