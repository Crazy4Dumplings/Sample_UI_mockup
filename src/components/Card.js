import React from "react";
import "../styles/Card.css";
import "./CardComponent";

function Card(props) {
  return (
    <div className="container">
      <div
        className="img-item"
        style={{
          backgroundImage: `url(/assets/img/${props.image})`,
        }}
      >
        <div className="text-center centered">
          <h3 className="reset-mp text-left mb-2">{props.cardTitle}</h3>
          <p className="reset-mp">{props.cardDescription}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
