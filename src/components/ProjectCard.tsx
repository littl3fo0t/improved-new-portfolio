// Project Component

import type React from "react";
import { useNavigate } from "react-router-dom";
import type { Project } from "../types/project";
import comingSoonPlaceholder from "../assets/images/coming-soon.png";

interface ProjectProps {
    project: Project
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
    const {
        id,
        title,
        imageUrl,
        description,
        isComplete
    } = project;

    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/projects/${id}`);
    };

    return (
        <div className="card">
            <div className="card-header has-text-centered">
                <p className="title">
                    {title}
                </p>
            </div>
            <div className="card-image">
                <figure className="image">
                    <img src={imageUrl || comingSoonPlaceholder} alt={title} />
                </figure>
            </div>
            <div className="card-content">
                <p className="content is-size-5">{description}</p>
            </div>
            <div className="card-footer">
                <div className="card-footer-item">
                    <button className="button is-rounded" disabled={!isComplete} onClick={handleClick}>
                        <span className="icon">
                            <i className="fas fa-arrow-alt-circle-right"></i>
                        </span>
                        <span>Project Link</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;