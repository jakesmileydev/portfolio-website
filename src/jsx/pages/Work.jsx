import Header from "../components/Header";
import Project from "../components/Project";

import projects from "../../files/projects";

export default function Work() {
  const projectElements = projects.map((project) => (
    <Project
      id={project.id}
      key={project.id}
      title={project.title}
      subTitle={project.subTitle}
      description={project.description}
      about={project.about}
      tags={project.tags}
      imageName={project.imageName}
      repoURL={project.repoURL}
      liveURL={project.liveURL}
    />
  ));
  return (
    <>
      <Header headerText="WORK" />
      <main>{projectElements}</main>
    </>
  );
}
