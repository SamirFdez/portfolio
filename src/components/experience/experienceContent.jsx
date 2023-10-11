import React from "react";
import { Education } from "./education";
import { Experience } from "./experience";

export const ExperienceContent = () => {
  return (
    <>
      <section
        className="d-flex align-items-center experience "
        data-aos="fade-down"
        id="experience"
      >
        <div className="container">
          <Experience/>
        </div>
      </section>
    </>
  );
};
