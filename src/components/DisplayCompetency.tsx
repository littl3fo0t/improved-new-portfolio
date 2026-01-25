// Competency Component

import type React from "react";
import type { Competency } from "../types/competency";

interface CompetencyProps {
    competency: Competency
};

const DisplayCompetency: React.FC<CompetencyProps> = ({ competency }) => {
    const { name, displayName, icon } = competency;

    return (
        <div className="control">
            <div className="tags are-large has-addons">
                <span className="tag icon is-dark">
                    <i className={icon} aria-hidden="true"></i>
                </span>
                <span className="tag" data-name={name}>{displayName}</span>
            </div>
        </div>
    );
};

export default DisplayCompetency;