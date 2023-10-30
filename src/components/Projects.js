const Projects = ({ setProject, project }) => {
  return (
    <>
      <h2 className="text-center text-4xl text-gray-500 shadow">Proyectos</h2>
      <p className="text-gray-400 mx-20 my-5">
        Mira los proyectos en los que he trabajado
      </p>
      <div className="flex flex-col justify-start items-start gap-4">
        <span
          className={`${
            project === 1 && "bg-orange-400"
          } border border-orange-400 rounded-xl  hover:bg-orange-400 text-white ml-20 p-2`}
          onClick={() => setProject(1)}
        >
          Detención de Alambiques
        </span>

        <span
          className={`${
            project === 2 && "bg-orange-400"
          } border border-orange-400 rounded-xl  hover:bg-orange-400 text-white ml-20 p-2`}
          onClick={() => setProject(2)}
        >
          Tienda Virtual
        </span>

        <span
          className={`${
            project === 3 && "bg-orange-400"
          } border border-orange-400 rounded-xl  hover:bg-orange-400 text-white ml-20 p-2`}
          onClick={() => setProject(3)}
        >
          Página Comercial
        </span>

        <span
          className={`${
            project === 4 && "bg-orange-400"
          } border border-orange-400 rounded-xl  hover:bg-orange-400 text-white ml-20 p-2`}
          onClick={() => setProject(4)}
        >
          Sistema de acceso comedores
        </span>
      </div>
    </>
  );
};

export default Projects;
