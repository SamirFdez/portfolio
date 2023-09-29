import React from "react";
import "./App.css";
import { NavbarMenu } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";

function App() {
  return (
    <>
      <div className="App">
        <NavbarMenu />
        <Hero />
        <Contact />

        <Footer />
      </div>
    </>
  );
}

export default App;
