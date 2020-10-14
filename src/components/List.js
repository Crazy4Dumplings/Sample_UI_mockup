import React from "react";
import "../styles/List.css";

function List(props) {
  return (
    <div className="icon-item">
      <p className="text-center">
        <img
          src={`/assets/icons/${props.image}`}
          className="img-icon"
          alt="Healthcare"
        />
      </p>
      <div className="text-center">
        <h3>{props.heading}</h3>
        <p>Learn more &rarr;</p>
      </div>
    </div>
  );
}

export default List;
