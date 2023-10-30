// import Footer from '../components/Footer';

import { useState } from "react";
import Greeting from "../components/Greeting";
import Section from "../components/Section";
import Selectors from "../components/Selectors";
import Typing from "../components/Typing";
import ProjectCard from "../components/ProjectCard";
function Home() {
  const [section, setSection] = useState(0);
  const [project, setProject] = useState(1);
  return (
    <div
      className="bg-cover bg-no-repeat h-screen "
      style={{ backgroundImage: "url(bg.png)" }}
    >
      <Greeting> ¡Hola soy Guillermo Torres!</Greeting>
      <Typing />
      <div className="flex justify-center flex-wrap">
        <Selectors section={section} setSection={setSection} />
        <Section section={section} project={project} setProject={setProject} />
      </div>
      <div className="flex justify-center flex-wrap">
        <ProjectCard section={section} project={project} />
      </div>

      {/* <Footer/>  */}
    </div>
  );
}

export default Home;
