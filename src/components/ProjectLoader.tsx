// Project Loader component

import { useParams, Navigate } from "react-router-dom";
import projectMap from "../data/projectMap";
import ProjectDetails from "./ProjectDetails";

const ProjectLoader:React.FC = () => {
    const { id } = useParams();

    if (!id) {
        return <Navigate to="/projects" replace />;
    }

    const projectId = parseInt(id);
    const Component = projectMap[projectId];

    if (!Component) {
         return <Navigate to="/projects" replace />;
    }

    return (
        <ProjectDetails id={projectId}>
            <Component />
        </ProjectDetails>
    );
};

export default ProjectLoader;