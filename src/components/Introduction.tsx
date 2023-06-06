import { Logo } from "./Logo";
import resume from "../utils/resume.pdf";
import { Link, Element } from "react-scroll";

export const Introduction = () => {
  const techSkills = [
    {
      name: "JS",
      icon: "/assets/icons/js.png",
    },
    {
      name: "TS",
      icon: "/assets/icons/typescript.png",
    },
    {
      name: "Angular",
      icon: "/assets/icons/angular.png",
    },
    {
      name: "React",
      icon: "/assets/icons/react.png",
    },
    {
      name: "CSS",
      icon: "/assets/icons/css-3.png",
    },
    {
      name: "Node",
      icon: "/assets/icons/node-js.png",
    },
  ];

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="lg:w-10/12 md:w-11/12 sm:w-9/12 w-10/12 m-auto pt-12 md:pt-32 pb-40 md:pb-80">
      <div className="flex basis-full sm:basis-3/5 flex-wrap">
        <div className="basis-full md:basis-7/12 items-center">
          <div className="headings">
            <h2 className="name">Francisco Javier Rosa</h2>
            <h3 className="role">Full Stack Developer</h3>
          </div>
          <div className="mt-10 max-w-xl primary-text text-lg">
            Hi, my name is Francisco Javier Rosa, a young Full Stack Software
            Developer trying to improve his programming skills everyday. I have
            a Software Engineering Degree and I love creating websites.
          </div>
          <div className="languages mt-8 mb-8">
            {techSkills.map((skill) => (
              <Logo key={skill.name} img={skill.icon} />
            ))}
          </div>
          <div className="resume">
            <button className="resume-button" onClick={downloadFile}>
              Download resume
            </button>
          </div>
          <Link to="about" smooth={true} duration={500}>
            Scroll to My Component
          </Link>
        </div>
        <div className="basis-full md:basis-5/12">
          <img
            src="assets/icons/developer.png"
            className="developer-img"
            alt="developer-img"
          />
        </div>
      </div>
    </section>
  );
};
