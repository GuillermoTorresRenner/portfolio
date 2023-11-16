const Greeting = ({ children }) => {
  return (
    <h1 className="block  text-center text-orange-400 py-10 pt-10 text-4xl ">
      {children}
    </h1>
  );
};

export default Greeting;
