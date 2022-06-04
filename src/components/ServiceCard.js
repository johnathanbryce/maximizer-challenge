import React from "react";

import classes from "./ServiceCard.module.css";

function ServiceCard({ id, summary, status }) {
  return (
    <div className={classes.service_card}>
      <p>{status} </p>
      <div className={classes.service_card_side}>
        <p> {id}</p>
        <p> {summary}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
