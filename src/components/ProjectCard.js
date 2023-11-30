import { SiGithub, SiHtml5 } from "react-icons/si";
const ProjectCard = ({ section, project }) => {
  return (
    <div
      className={`${
        section !== 3 && "hidden"
      } border-4 rounded-2xl border-gray-400 w-4/5 text-xs sm:text-xl sm:w-3/5 mt-10 px-10 pb-10 h-full bg-neutral-900`}
    >
      {project === 1 && (
        <>
          <div className="flex justify-center gap-10 mt-5">
            <a
              href={
                "https://github.com/GuillermoTorresRenner/detencionAlambiques"
              }
              target="blank"
            >
              <SiGithub size={50} color="white" />
            </a>
            <a
              href={
                "https://github.com/GuillermoTorresRenner/detencionAlambiques"
              }
              target="blank"
            >
              <SiHtml5 size={50} color="white" />
            </a>
          </div>

          <div>
            <p className="text-gray-400 ml-3 mt-4">
              Proyecto realizado con Quasar Framework y Firebase para notificar
              detenciones de alambiques en proceso de destilación.
            </p>
            <p className="text-gray-400 ml-3 mt-2">
              Cuando un alambique es detenido se notifica el destilador notifica
              la causa de detención reportando y el alambique detenido.La App
              envía un correo al administrador para que valide la eventualidad y
              se pueda alimentar las KPI de la empresa con estas contingenicas
              tabuladas.
            </p>
          </div>
        </>
      )}
      {project === 3 && (
        <>
          <div className="flex justify-center gap-10 mt-5">
            <a
              href={
                "https://github.com/GuillermoTorresRenner/coder-desarrollo-web"
              }
              target="blank"
            >
              <SiGithub size={50} color="white" />
            </a>
            <a
              href={
                "https://guillermotorresrenner.github.io/coder-desarrollo-web/"
              }
              target="blank"
            >
              <SiHtml5 size={50} color="white" />
            </a>
          </div>

          <div>
            <p className="text-gray-400 ml-3 mt-4">
              Proyecto realizado con HTML5, CSS3, y Bootrap, como trabajo
              durante el cursado de Desarrollo web en la plataforma CoderHouse.
            </p>
            <p className="text-gray-400 ml-3 mt-2">
              La misma se realizó a pedido de un cliente quien definió el estilo
              de la página para su negocio, siendo éste mi primer trabajo para
              un tercero,
            </p>
          </div>
        </>
      )}
      {project === 2 && (
        <>
          <div className="flex justify-center gap-10 mt-5">
            <a
              href={"https://github.com/GuillermoTorresRenner/cousinvera"}
              target="blank"
            >
              <SiGithub size={50} color="white" />
            </a>
            <a
              href={"https://guillermotorresrenner.github.io/cousinvera/"}
              target="blank"
            >
              <SiHtml5 size={50} color="white" />
            </a>
          </div>

          <div>
            <p className="text-gray-400 ml-3 mt-4">
              Proyecto en realización actualmente para el curso de React Js en
              la plataforma CoderHouse.
            </p>
            <p className="text-gray-400 ml-3 mt-2">
              Como ejercicio se realiza una tienda virtual ficticia de venta de
              plantas e insumos de jardinería.
            </p>
          </div>
        </>
      )}
      {project === 4 && (
        <>
          <div className="flex justify-center gap-10 mt-5">
            <a
              href={"https://github.com/GuillermoTorresRenner/eatapp"}
              target="blank"
            >
              <SiGithub size={50} color="white" />
            </a>
          </div>

          <div>
            <p className="text-gray-400 ml-3 mt-4">
              Proyecto realizado con Quasar Framework para el Front End y Back
              End de ExpressJs con base de datos MongoDB desplegado desde un
              contenedor docker.
            </p>
            <p className="text-gray-400 ml-3 mt-2">
              Este Proyecto se encuentra en desarrollo a la fecha y se enfoca en
              lograr un sistema dedicado al control de acceso de trabajadores a
              servicios de alimentación en casinos mineros. Sus principales
              casos de uso son: administrar casinos, servicios, empresas y
              trabajadores, dar reportes de consumo y bases de facturación.
            </p>
          </div>
        </>
      )}

      {/* {project === 2 && <p>Proyecto2</p>}
      https://github.com/GuillermoTorresRenner/coder-desarrollo-web
      {project === 3 && <p>Proyecto3</p>}
      {project === 4 && <p>Proyecto4</p>} */}
    </div>
  );
};

export default ProjectCard;
