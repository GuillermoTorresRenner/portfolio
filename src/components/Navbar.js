import React from "react";

const Navbar = ({ section, project, setSection, setProject }) => {
  return (
    <div className=" text-neutral-400 font-bold mb-10 mx-20 lg:hidden">
      <ul className="px-5 py-4">
        <li
          className={` ${section===1&&"bg-orange-400 rounded-2xl text-white"} my-2 border-b py-2 text-center`}
          onClick={() => setSection(1)}
        >
          Acerca de Mí
        </li>

        <li
          className={` ${section===2&&"bg-orange-400 rounded-2xl text-white"} my-2 border-b py-2 text-center`}
          onClick={() => setSection(2)}
        >
          Expertise
        </li>

        <li
          className={` ${section===3&&"bg-orange-400 rounded-2xl text-white"} my-2 border-b py-2 text-center`}
          onClick={() => setSection(3)}
        >
          Proyectos
        </li>
        <li
          className={` ${section===4&&"bg-orange-400 rounded-2xl text-white"} my-2 border-b py-2 text-center`}
          onClick={() => setSection(4)}
        >
          Contacto
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
