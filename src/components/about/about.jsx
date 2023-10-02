import React from "react";
import AboutPhoto from "../../assets/images/aboutPhoto.jpeg";

export const About = () => {
  return (
    <>
      <section className="d-flex align-items-center about" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 pt-5 pt-xl-0 order-1 order-lg-2 aboutMe"
              data-aos="fade-right"
            >
              <h2> About me </h2>
              <div data-aos="fade-right" data-aos-duration="1750">
                <p>
                  Hello there! My name is Samir, and I am a Front-end software
                  engineer. I learned web development because I aspired to possess
                  the ability to create valuable and engaging digital content. I
                  have a deep passion for the concept of transforming ideas into
                  reality and sharing them globally through the Internet.
                </p>
                <p>
                  Additionally, I have always liked taking on the challenge of
                  acquiring new knowledge, and web development constantly offers
                  me the opportunity to do exactly that.
                </p>
              </div>
            </div>
            <div className="col-xl-6 order-2 order-xl-2 text-center">
              <img src={AboutPhoto} className="AboutPhoto" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
