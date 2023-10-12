import React from "react";
import { Education } from "./education";
import { Experience } from "./experience";

export const ExperienceContent = () => {
  return (
    <>
      <section
        className="d-flex align-items-center experience "
        id="experience"
      >
        <div className="container">
          <div data-aos="fade-down">
            <Experience />
          </div>
          <div data-aos="fade-up">
            <Education />
          </div>
        </div>
      </section>
    </>
  );
};
