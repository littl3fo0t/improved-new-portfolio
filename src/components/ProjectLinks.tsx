// Project Links component

import { Link } from "react-router-dom";

interface ProjectLinkProps {
    github: string;
    live: string | null;
};

const ProjectLinks: React.FC<ProjectLinkProps> = ({ github, live }) => {
    return (
        <div className="buttons are-medium">
            <a href={github} className="button is-rounded is-inverted" target="_blank">
                <span className="icon-text">
                    <span className="icon">
                        <i className="fab fa-github" aria-hidden="true"></i>
                    </span>
                    <span>See Code</span>
                </span>
            </a>
            {live && (
                <a href={live} className="button is-rounded is-inverted" target="_blank">
                    <span className="icon-text">
                        <span className="icon">
                            <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                        </span>
                        <span>Live Demo</span>
                    </span>
                </a>
            )}
            <Link to="/projects" className="button is-rounded">
                <span className="icon">
                    <i className="fas fa-arrow-alt-circle-left" aria-hidden="true"></i>
                </span>
                <span>Return to Projects</span>
            </Link>
        </div>
    );
};

export default ProjectLinks;