import React, { useEffect } from "react";
import TypewriterComponent from "typewriter-effect";
import { useLottie } from "lottie-react";
import Animation from "../../assets/images/animation.json";
import iconGithub from "../../assets/images/iconGithub.png";
import linkedin from "../../assets/images/linkedin.png";

export const Hero = () => {
  const options = {
    animationData: Animation,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <>
      <section className="d-flex align-items-center hero" id="home">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 pt-5 pt-xl-0 order-2 order-lg-2"
              data-aos="fade-right"
            >
              <h4>Hi, my name is</h4>
              <h1>Samir Fernández</h1>
              <h2>
                <TypewriterComponent
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 160,
                    strings: [
                      "I am a web developer",
                      "I build things for the web",
                    ],
                  }}
                />
              </h2>
              <h3>
                I'm a front-end software engineer passionate about turning ideas
                into lines of code and creating functional, accessible and
                useful web applications.
              </h3>
              <div>
                <a
                  href="https://github.com/SamirFdez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={iconGithub} className="imgIcon" />
                </a>
                <a
                  className="ms-4"
                  href="www.linkedin.com/in/samirfdez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} className="imgIcon" />
                </a>
              </div>
            </div>
            <div
              className="col-xl-6 order-1 order-xl-2 hero-img"
              data-aos="fade-left"
            >
              {View}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
