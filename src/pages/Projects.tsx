import { ProjectCard } from "../components/projects/ProjectCard";
import { Thumbnail } from "../components/projects/Thumbnail";
import { Element } from "react-scroll";

export const Projects = ({ projects }: { projects: any[] }) => {
  return (
    <Element name="projects">
      <section className="lg:w-10/12 md:w-11/12 sm:w-9/12 w-10/12 m-auto pb-32">
        <h2 className="section-title">03. Projects</h2>
        <div className="flex mt-20 w-auto md:w-9/12 lg:w-10/12 m-0 md:mx-auto lg:ml-16 flex-col gap-40">
          {projects.map((project) => (
            <div key={project.id} className="project">
              <Thumbnail
                image={project.img}
                url={project.url}
                disabled={project.disabled}
                name={project.name}
              />
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};
