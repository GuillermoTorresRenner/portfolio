// import Footer from '../components/Footer';

import { useState } from "react";
import Greeting from "../components/Greeting";
import Section from "../components/Section";
import Selectors from "../components/Selectors";
import Typing from "../components/Typing";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";
function Home() {
  const [section, setSection] = useState(1);
  const [project, setProject] = useState(1);

  return (
    <div className="lg:bg-gradient-to-bl from-orange-400 from-15% to-neutral-900 to-10% pb-5 ">
      <Greeting> ¡Hola soy Guillermo Torres!</Greeting>
      <Typing />
      <Navbar
        section={section}
        setSection={setSection}
        project={project}
        setProject={setProject}
      />
      <div className="container grid grid-cols-12">
        <Selectors section={section} setSection={setSection} className="" />
        <Section
          section={section}
          project={project}
          setProject={setProject}
          className="col-span-3"
        />
      </div>
      <div className="flex justify-center flex-wrap">
        <ProjectCard section={section} project={project} />
      </div>
    </div>
  );
}

export default Home;
