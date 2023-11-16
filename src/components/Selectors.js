const Selectors = ({ section, setSection }) => {
  return (
    <div className="hidden lg:block col-start-2 col-span-3 mx-2">
      <ul className="border-l-4 px-4  border-gray-500 rounded-xl  mx-20  py-10">
        <li
          className={`text-orange-400 mb-8 hover:underline  ${
            section === 1 && " underline "
          }`}
          onClick={() => setSection(1)}
        >
          <span className="text-2xl text-extrabold">{section === 1}</span>
          Acerca de Mí
        </li>

        <li
          className={`text-orange-400 mb-8 hover:underline ${
            section === 2 && " underline "
          }`}
          onClick={() => setSection(2)}
        >
          <span className="text-2xl text-extrabold">{section === 2}</span>
          Expertise
        </li>

        <li
          className={`text-orange-400 mb-8 hover:underline ${
            section === 3 && "  underline"
          }`}
          onClick={() => setSection(3)}
        >
          <span className="text-2xl text-extrabold">{section === 3}</span>
          Proyectos
          <div></div>
        </li>

        <li
          className={`text-orange-400 mb-8 hover:underline ${
            section === 4 && " underline "
          }`}
          onClick={() => setSection(4)}
        >
          <span className="text-2xl text-bextraold">{section === 4}</span>
          Contacto
        </li>
      </ul>
    </div>
  );
};

export default Selectors;
