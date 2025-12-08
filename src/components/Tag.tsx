// Tag Component

import type React from "react";
import type { Skill } from "../types/skill";
import { Link } from "react-router-dom";

interface TagProps {
    skill: Skill
};

const Tag: React.FC<TagProps> = ({ skill }) => {
    const { name, displayName, hasAddons, iconName } = skill;
    const encodedName = encodeURIComponent(displayName);
    if (hasAddons) {
        return (
            <Link to={`/projects?tag=${encodedName}`}>
                <div className="control">
                    <div className="tags are-large has-addons">
                        <span className="tag icon is-dark">
                            <i className={iconName?.join(" ")} aria-hidden="true"></i>
                        </span>
                        <span className="tag is-hoverable" data-name={name}>{displayName}</span>
                    </div>
                </div>
            </Link>
        );
    } else {
        return (
            <Link to={`/projects?tag=${encodedName}`}>
                <span className="tag is-hoverable is-large" data-name={name}>{displayName}</span>
            </Link>

        );
    }

};

export default Tag;