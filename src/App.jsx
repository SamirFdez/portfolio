import React, { useEffect } from "react";
import "./App.css";
import { NavbarMenu } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { ExperienceContent } from "./components/experience/experienceContent";
import { Projects } from "./components/Projects/projects";
import { Skills } from "./components/skills/skills";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { BackToTop } from "./components/backToTop/backToTop";
import AOS from "aos";

function App() {

  useEffect(() => {
    AOS.init({ 
      duration: 1500
    });
  }, []);

  return (
    <>
      <div className="App">
        <NavbarMenu />
        <Hero />
        <About/>
        <ExperienceContent/>
        <Projects/>
        <Skills/>
        <Contact />
        <Footer />
        <BackToTop/>
      </div>
    </>
  );
}

export default App;
