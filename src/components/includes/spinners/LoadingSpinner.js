import React from "react";
import "./css/LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loader-overlay">
      <div className="lds-ring">
        <div></div><div></div><div>
        </div><div></div></div>
    </div>
  );
};

export default LoadingSpinner;
