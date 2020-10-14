import React from "react";
import "../styles/ReviewItem.css";

function ReviewItem(props) {
  return (
    <div>
      <div className="client-item">
        <img
          src={`/assets/img/profile/${props.image}`}
          alt="Avatar"
          className="avatar"
        />
        <h3>John Doe</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio minima
          distinctio voluptatum adipisci eum natus beatae enim dignissimos
          temporibus sed.
        </p>
      </div>
    </div>
  );
}

export default ReviewItem;
