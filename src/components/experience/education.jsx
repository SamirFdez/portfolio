import React from "react";
import { educationArray } from "../../configs/experience.config";

export const Education = () => {
  return (
    <>
      <h2> Education </h2>
      <ul className="timeline">
        {educationArray.map((educ, index) => (
          <li key={index} className="timeline-item mb-5">
            <h5 className="fw-bold">{educ.institution}</h5>
            <h6 className="text-white">{educ.institution}</h6>
            <p className="text-muted mb-2 fw-bold">{educ.time}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
