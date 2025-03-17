import React from "react";
import "./error.scss";

const Error = () => {
  return (
    <div className="error">
      <div className="container">
        <div className="error__emoji">😣</div>
        <h2 className="error__title">
          К сожалению, пиццы не удалось загрузить, попробуйте сделать это позже
          или перезагрузить страницу
        </h2>
      </div>
    </div>
  );
};
export default Error;
