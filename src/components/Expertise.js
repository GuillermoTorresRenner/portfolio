import {
  SiQuasar,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiReact,
  SiVuedotjs,
  SiCodeigniter,
  SiMongodb,
  SiMariadb,
  SiMysql,
  SiLinux,
  SiDocker,
  SiNextdotjs,
} from "react-icons/si";
const Expertise = () => {
  return (
    <>
      <h2 className="text-center text-4xl text-gray-500 shadow">Expertise</h2>
      <p className="text-gray-400 mx-20 my-5">
        Al día de la fecha tengo experiencia en el uso de las siguientes
        tecnologías:
      </p>
      <div className="flex justify-around flex-wrap">
        <div className="m-5 border border-gray-400 p-5">
          <h3 className="text-gray-500 text-2xl text-center">Front End</h3>
          <div className="flex justify-center gap-5 mt-10">
            <SiReact size={50} color="white" />
            <SiVuedotjs size={50} color="white" />
          </div>
        </div>

        <div className="m-5 border border-gray-400 p-5">
          <h3 className="text-gray-500 text-2xl text-center">Frameworks</h3>
          <div className="flex justify-center gap-5 mt-10">
            <SiQuasar size={50} color="white" />
            <SiDjango size={50} color="white" />
            <SiCodeigniter size={50} color="white" />
            <SiNextdotjs size={50} color="white" />
          </div>
        </div>

        <div className="m-5 border border-gray-400 p-5">
          <h3 className="text-gray-500 text-2xl text-center">Back End</h3>
          <div className="flex justify-center gap-5 mt-10">
            <SiPython size={50} color="white" />
            <SiNodedotjs size={50} color="white" />
          </div>
        </div>

        <div className="m-5 border border-gray-400 p-5">
          <h3 className="text-gray-500 text-2xl text-center">Databases</h3>
          <div className="flex justify-center gap-5 mt-10">
            <SiMongodb size={50} color="white" />
            <SiMariadb size={50} color="white" />
            <SiMysql size={50} color="white" />
          </div>
        </div>

        <div className="m-5 border border-gray-400 p-5">
          <h3 className="text-gray-500 text-2xl text-center">Otros</h3>
          <div className="flex justify-center gap-5 mt-10">
            <SiLinux size={50} color="white" />
            <SiDocker size={50} color="white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
