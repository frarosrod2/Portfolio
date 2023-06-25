import { ProjectCard } from "../components/projects/ProjectCard";
import { Thumbnail } from "../components/projects/Thumbnail";
import { projects } from "../utils/projects";

export const Projects = ({ projects }: { projects: any[] }) => {
  return (
    <>
      <section className="lg:w-10/12 md:w-11/12 sm:w-9/12 w-10/12 m-auto pb-64">
        <h2 className="section-title">03. Projects</h2>
        <div className="projects-container mt-32 w-auto md:w-9/12 lg:w-10/12 m-0 md:mx-auto lg:ml-16 flex-col gap-40">
          {projects.map((project) => (
            <div className="flex">
              <Thumbnail />
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
