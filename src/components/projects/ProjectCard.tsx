import { Tooltip, Grid } from "antd";

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

  const { useBreakpoint } = Grid;
  const { xl } = useBreakpoint();

  return (
    <div className="lg:basis-5/12 card">
      <h3 className="project-name">{name}</h3>
      <h4 className="web-name">{web}</h4>
      <div className="overflow-section">
        {xl ? (
          <span>{description}</span>
        ) : (
          <Tooltip title={description}>
            <span>{description}</span>
          </Tooltip>
        )}
      </div>
    </div>
  );
};
