import { v4 as uuidv4 } from "uuid";
import { project } from "/src/data.js";
import Card from "/src/components/elements/Card";
import "/src/stylesheets/sections/Project.css";

const Project = () => {
  return (
    <section className="Project section" id="Projects">
      <div className="container">
        <h2 className="Project-h2 section-head">Projects</h2>
        <div className="Project-wrapper">
          {project.map((c) => (
            <Card
              name={c.name}
              description={c.description}
              stack={c.stack}
              linkProject={c.linkProject}
              linkGithub={c.linkGithub}
              key={uuidv4()}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
