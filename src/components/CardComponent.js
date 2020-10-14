import React from "react";
import Card from "./Card";
import "../styles/CardComponent.css";

function CardComponent() {
  return (
    <div className="cards">
      <Card
        cardTitle="A Talent"
        cardDescription="Looking for a job"
        image="talent.jpg"
      />
      <Card
        cardTitle="A Company"
        cardDescription="Looking for a talent"
        image="company.jpg"
      />
      <Card
        cardTitle="A Client"
        cardDescription="Having a project"
        image="client.jpg"
      />
    </div>
  );
}

export default CardComponent;
