import React, { useState } from "react";
import ServiceCard from "./ServiceCard";

function OpenCases({ openServices }) {
  let key = Math.random().toString(16).slice(2);
  return (
    <div>
      <h2> Open Cases </h2>
      {openServices.map((service) => {
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

export default OpenCases;
