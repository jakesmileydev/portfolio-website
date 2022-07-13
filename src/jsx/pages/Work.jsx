import Header from "../components/Header";
import Project from "../components/Project";

import { motion } from "framer-motion";

import projects from "../../files/projects";

export default function Work(props) {
  const projectElements = projects.map((project) => (
    <Project
      id={project.id}
      key={project.id}
      title={project.title}
      subTitle={project.subTitle}
      description={project.description}
      about={project.about}
      features={project.features}
      tags={project.tags}
      imageName={project.imageName}
      repoURL={project.repoURL}
      liveURL={project.liveURL}
    />
  ));
  return (
    <motion.div
      className="page"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        opacity: {
          ease: "linear",
          duration: 0.3,
        },
        y: {
          ease: "easeOut",
          duration: 0.3,
        },
      }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <Header headerText="WORK" setIsMobileNavOpen={props.setIsMobileNavOpen} />
      <main>{projectElements}</main>
    </motion.div>
  );
}
