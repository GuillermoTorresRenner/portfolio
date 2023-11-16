import Typewriter from "typewriter-effect";
const Typing = () => {
  return (
    <div className="text-orange-400  my-10 lg:text-2xl border mx-auto p-4 w-3/4 lg:w-1/3 border-gray-500">
      {/* <Typewriter
  options={{
    strings: ['> Bienvenidos a mi portfolio', '> Te invito a recorrer este espacio'],
    autoStart: true,
    loop: false,
    
  }}/> */}
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("> Bienvenido a mi portfolio").start();
        }}
      />
    </div>
  );
};

export default Typing;
