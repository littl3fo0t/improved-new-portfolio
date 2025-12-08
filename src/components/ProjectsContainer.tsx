// // Projects Container Component

import type React from "react";
import type { Project } from "../types/project";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
    projects: Project[]
};

const ProjectsContainer: React.FC<ProjectsProps> = ({ projects }) => {
    return (
        <div className="container is-flex is-flex-wrap-wrap is-align-items-baseline">
            {projects.map((project, index) => <ProjectCard key={index} project={project} />)}
        </div>
    );
};

export default ProjectsContainer;