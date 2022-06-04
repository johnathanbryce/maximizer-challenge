import React from "react";
import ServiceCard from "./ServiceCard";

function ClosedCases({ closedServices }) {
  let key = Math.random().toString(16).slice(2);
  return (
    <div>
      <h2> Closed Cases </h2>
      {closedServices.map((service) => {
        return (
          <ServiceCard
            id={service.id}
            summary={service.summary}
            key={key}
            status={service.status}
          />
        );
      })}
    </div>
  );
}

export default ClosedCases;
