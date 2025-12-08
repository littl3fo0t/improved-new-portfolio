// No Projects Found Component

import { Link } from "react-router-dom";

const NoProjectsFound: React.FC = () => {
    return (
        <article className="message is-info">
            <div className="message-header">
                <p>Nothing here yet...</p>
            </div>
            <div className="message-body">
                <p className="is-size-5">
                    Looks like there aren't any projects associated with this tag yet. I'm probably still working on something new — check back soon to see what I've added!
                </p>
                <Link to="/projects" className="button is-info is-rounded">
                    <span className="icon">
                        <i className="fas fa-arrow-alt-circle-left"></i>
                    </span>
                    <span>See my other Projects</span>
                </Link>
            </div>
        </article>
    );
};

export default NoProjectsFound;