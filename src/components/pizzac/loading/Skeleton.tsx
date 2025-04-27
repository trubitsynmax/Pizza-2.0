import React from "react"; //!react components
import "./skeleton.scss"; //!css

const Skeleton: React.FC = () => {
  return (
    <div className="skeleton">
      <div className="container">
        <div className="skeleton__column">
          <div className="skeleton__image"></div>
          <div className="skeleton__body"></div>
          <div className="skeleton__item">
            <div className="skeleton__price"></div>
            <div className="skeleton__button"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
