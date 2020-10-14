import React from "react";
import "../styles/ServiceList.css";
import List from "./List";

function ServiceList() {
  return (
    <div className="service-item-2">
      <div className="child-icon">
        <List image="first-aid-kit.svg" heading="Healthcare" />
        <List image="museum.svg" heading="Banking" />
        <List image="retail.svg" heading="Retail" />
      </div>
      <div className="child-icon">
        <List image="government.svg" heading="Government" />
        <List image="airlines.svg" heading="Airlines" />
        <List image="communication.svg" heading="Communication" />
      </div>
    </div>
  );
}

export default ServiceList;
