export const ProjectCard = ({ project }: any) => {
  const {
    name,
    web,
    description,
  }: {
    name: string;
    web: string;
    description: string;
  } = project;
  return (
    <div className="lg:basis-5/12 card">
      <h3 className="project-name">{name}</h3>
      <h4 className="web-name">{web}</h4>
      <div className="overflow-section">
        <span>{description}</span>
      </div>
    </div>
  );
};
