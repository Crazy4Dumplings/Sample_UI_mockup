import React from "react";
import "../styles/Reviews.css";
import ReviewItem from "./ReviewItem";

function Reviews() {
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <h2 className="text-center">Our reviews</h2>
      <div className="client-review text-center">
        <ReviewItem image="img-1.png" />
        <ReviewItem image="img-2.png" />
        <ReviewItem image="img-3.png" />
      </div>
    </div>
  );
}

export default Reviews;
