import About from "./About";
import Expertise from "./Expertise";
import Projects from "./Projects";
import Contact from "./Contact";
const Section = ({ section, setProject, project }) => {
  return (
    <div
      className={` w-2/5 mx-20 ${
        section !== 0 && "border-gray-500 border-l-4 border-r-4 rounded-xl"
      }`}
    >
      {/* --------------------------------------------------------------------------------Sección de About */}
      {section === 1 && <About />}
      {/*--------------------------------------------------------------------------- Sección de expertise */}
      {section === 2 && <Expertise />}
      {/* -------------------------------------------------------------------------------------Sección de Contacto */}
      {section === 3 && <Projects setProject={setProject} project={project} />}
      {/* -------------------------------------------------------------------------------------Sección de Contacto */}
      {section === 4 && <Contact />}
    </div>
  );
};

export default Section;
