import { Element } from "react-scroll";

export const About = () => {
  return (
    <Element name="about">
      <section className="lg:w-10/12 md:w-11/12 sm:w-9/12 w-10/12 m-auto pb-24">
        <h2 className="section-title">01. About</h2>
        <div className="mt-10 max-w-2xl text-justify primary-text text-lg">
          Hi, my name is Francisco Javier Rosa. I have a Software Engineering
          Degree and I love creating websites. I consider myself as a Full-Stack
          Developer, although I prefer to work in the frontend. I have been
          working with frontend frameworks and libraries such as Angular and
          React, and in the backend I have used Express about all, using both
          Javascript and Typescript. In addition, I also like to develop with
          CSS, as it is a nice way of use my imagination.
        </div>
        <div className="mt-5 max-w-2xl text-justify primary-text text-lg">
          Furthermore, I love to keep learning with online courses from Udemy or
          Youtube, as I love to learn new technologies. Some of the technologies
          that I am trying to learn next are: Next.js, Qwick and Python.
        </div>
        <div className="mt-5 max-w-2xl text-justify primary-text text-lg">
          In addition, I have a C1 degree in English in Cambridge.
        </div>
      </section>
    </Element>
  );
};
