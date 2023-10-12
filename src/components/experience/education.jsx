import React from "react";
import { educationArray } from "../../configs/experience.config";

export const Education = () => {
  return (
    <>
      <h2> Education </h2>
      <div className="row d-flex">
        <div className="col-md-4">
          <ul className="timeline">
            {educationArray.slice(0, 1).map((edu, index) => (
              <li key={index} className="timeline-item mb-5">
                <h5 className="fw-bold">{edu.course}</h5>
                <h6 className="text-white">{edu.institution}</h6>
                <p className="text-muted mb-2 fw-bold">{edu.time}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-4">
          <ul className="timeline">
            {educationArray.slice(1, 2).map((edu, index) => (
              <li key={index} className="timeline-item mb-5">
                <h5 className="fw-bold">{edu.course}</h5>
                <h6 className="text-white">{edu.institution}</h6>
                <p className="text-muted mb-2 fw-bold">{edu.time}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-4">
          <ul className="timeline">
            {educationArray.slice(2, 3).map((edu, index) => (
              <li key={index} className="timeline-item mb-5">
                <h5 className="fw-bold">{edu.course}</h5>
                <h6 className="text-white">{edu.institution}</h6>
                <p className="text-muted mb-2 fw-bold">{edu.time}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
