import React from "react";
import "../styles/Services.css";
import ServiceDescription from "./ServiceDescription";
import ServiceList from "./ServiceList";

function Services() {
  return (
    <div className="container">
      <div className="services">
        <ServiceDescription />
        <ServiceList />
      </div>
    </div>
  );
}

export default Services;
