import React from "react";

export default function Card(props) {
  return (
    <div className="review-card">
      <iframe
        title={props.uniqueKey.toString()}
        scrolling="no"
        src="https://thispersondoesnotexist.com/image"
      />
      <div className="review-card__text-container">
        <p>"{props.testimonial}"</p>
        <p> - {props.name}</p>
      </div>
    </div>
  );
}
