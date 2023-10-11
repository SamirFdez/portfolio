import React from "react";
import { experienceArray } from "../../configs/experience.config";

export const Experience = () => {

  return (
    <>
      <h2> Experience </h2>
      <div className="row d-flex">
        <div className="col-xl-4" >
          <ul className="timeline">
            {experienceArray.slice(0, 2).map((exp, index) => (
              <li key={index} className="timeline-item mb-5">
                <h5 className="fw-bold">{exp.position}</h5>
                <h6 className="text-white">{exp.company}</h6>
                <p className="text-muted mb-2 fw-bold">{exp.time}</p>
                {exp.responsibilities.map((tasks, index) => (
                  <p key={index} className="mb-1" style={{ margin: "0px" }}>
                    • {tasks}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-xl-4" data-aos="fade-down">
          <ul className="timeline">
            {experienceArray.slice(2, 4).map((exp, index) => (
              <li key={index} className="timeline-item mb-5">
                <h5 className="fw-bold">{exp.position}</h5>
                <h6 className="text-white">{exp.company}</h6>
                <p className="text-muted mb-2 fw-bold">{exp.time}</p>
                {exp.responsibilities.map((tasks, index) => (
                  <p key={index} className="mb-1" style={{ margin: "0px" }}>
                    • {tasks}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-xl-4" data-aos="fade-down">
          <ul className="timeline">
            {experienceArray.slice(4, 5).map((exp, index) => (
              <li key={index} className="timeline-item mb-5">
                <h5 className="fw-bold">{exp.position}</h5>
                <h6 className="text-white">{exp.company}</h6>
                <p className="text-muted mb-2 fw-bold">{exp.time}</p>
                {exp.responsibilities.map((tasks, index) => (
                  <p key={index} className="mb-1" style={{ margin: "0px" }}>
                    • {tasks}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
