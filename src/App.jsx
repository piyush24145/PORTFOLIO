// App.js
import Homepage from "./Homepage/Homepage";
import React from "react";
import Expertise from "./Skills/Expertise";
import Projects from "./projects/Projects";
import Contacts from "./contact/Contacts";
import Achivements from "./acquire/achivements";

export default function App() {
  return (
    <>
    <div className="scroll-smooth"> 
      <Homepage />
      <div id="skills">
        <Expertise />
      </div>
        <div id="works">
        <Projects/>
      </div>
      <div id="achivements">
        <Achivements/>
      </div>
      <div id="contact">
        <Contacts/>
      </div>
      </div>
    </>
  );
}
