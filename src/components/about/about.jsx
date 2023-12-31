import React from "react";
import AboutPhoto from "../../assets/images/aboutPhoto.jpg";

export const About = () => {
  return (
    <>
      <section className="d-flex align-items-center about" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 pt-5 pt-xl-0 order-1 order-lg-2 aboutMe"
              data-aos="flip-left"
            >
              <h2> About me </h2>
              <div>
                <p>
                  Hello there! My name is Samir, and I am a Front-end software
                  engineer. I learned web development because I aspired to
                  possess the ability to create valuable and engaging digital
                  content. I'm deep passionate for the concept of transforming
                  ideas into reality and sharing them globally through the
                  Internet.
                </p>
                <p>
                  Additionally, I have always liked taking on the challenge of
                  acquiring new knowledge, and web development constantly offers
                  me the opportunity to do exactly that.
                </p>
              </div>
            </div>
            <div
              className="col-xl-6 order-2 order-xl-2 text-center"
              data-aos="flip-right"
            >
              <img src={AboutPhoto} className="aboutPhoto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
