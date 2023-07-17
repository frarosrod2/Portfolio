import { Logo } from "./Logo";
import resume from "../utils/resume.pdf";
import js from "../assets/images/js.png";
import typescript from "../assets/images/typescript.png";
import angular from "../assets/images/angular.png";
import react from "../assets/images/react.png";
import css from "../assets/images/css-3.png";
import node from "../assets/images/node-js.png";
import developer from "../assets/images/developer.png";

export const Introduction = () => {
  const techSkills = [
    {
      name: "JS",
      icon: js,
    },
    {
      name: "TS",
      icon: typescript,
    },
    {
      name: "Angular",
      icon: angular,
    },
    {
      name: "React",
      icon: react,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "Node",
      icon: node,
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
    <section className="lg:w-10/12 md:w-11/12 sm:w-9/12 w-10/12 m-auto pt-12 md:pt-32 pb-40">
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
              <Logo key={skill.name} img={skill.icon} alt={skill.name} />
            ))}
          </div>
          <div className="resume">
            <button className="resume-button" onClick={downloadFile}>
              Download resume
            </button>
          </div>
        </div>
        <div className="basis-full md:basis-5/12 md:mt-0 mt-16  ">
          <img src={developer} className="developer-img" alt="developer-img" />
        </div>
      </div>
    </section>
  );
};
