import { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [hidden,setHidden]=useState(true)
  return (
    <nav className="flex items-center justify-end flex-wrap  p-6 bg-neutral-900">
  
  <div className="block lg:hidden">
    <button onClick={()=>setHidden(!hidden)} className="flex items-center px-3 py-2 border rounded text-green-300 border-teal-400 hover:text-white hover:border-white">
      <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  {hidden?<div  className="flex w-full block flex-grow lg:flex lg:items-center lg:justify-end ">
    <div className="text-md lg:flex-grow ">
      <NavLink to="/" className="block mt-4 lg:inline-block lg:mt-0 text-green-500 hover:text-white mr-4">
        Incio
      </NavLink>
      <NavLink to="about" className="block mt-4 lg:inline-block lg:mt-0 text-green-500 hover:text-white mr-4">
        Sobre Mí
      </NavLink>
      <NavLink to="expertise" className="block mt-4 lg:inline-block lg:mt-0 text-green-500 hover:text-white mr-4">
        Expertise
      </NavLink>
      <NavLink to="projects" className="block mt-4 lg:inline-block lg:mt-0 text-green-500 hover:text-white mr-4">
        Proyectos
      </NavLink>
      <NavLink to="contact" className="block mt-4 lg:inline-block lg:mt-0 text-green-500 hover:text-white">
        Contacto
      </NavLink>
    </div>
    
  </div>:null}
</nav>

    
  );
};

export default Navbar
