import { SiGmail, SiGithub, SiLinkedin } from "react-icons/si";
const Contact = () => {
  return (
    <>
      <h2 className="text-center text-4xl text-gray-500 shadow">Contacto</h2>
      <p className="text-gray-400 mx-20 my-5">
        Puedes contactarme en mis redes:
      </p>
      <div className="flex  justify-center mt-10 gap-10">
        <a href={"mailto:torresrennerguillermo@gmail.com"}>
          <SiGmail size={50} color="white" />
        </a>
        <a href={"https://github.com/GuillermoTorresRenner"} target="blank">
          <SiGithub size={50} color="white" />
        </a>
        <a
          href={
            "https://www.linkedin.com/in/guillermotorres-fullstackdeveloper"
          }
          target="blank"
        >
          <SiLinkedin size={50} color="white" />
        </a>
      </div>
    </>
  );
};

export default Contact;
