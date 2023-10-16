import React, { useEffect, useState } from "react";
import arrowUp from "../../assets/images/arrowUp.png";

export const BackToTop = function () {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 400) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <a
        id="backTotop"
        href="#"
        className="to-top-icon"
        onClick={scrollToTop}
        style={{ display: showButton ? "block" : "none" }}
      >
          <img src={arrowUp} alt="Arrow Up" className="imgArrowUp"/>
      </a>
    </>
  );
};
