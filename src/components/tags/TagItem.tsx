// TagItem Component

import type React from "react";
import type TagDetails from "../../types/tagDetails";
import type Tag from "../../types/tag";
import { Link } from "react-router-dom";

interface TagItemProps {
    tag: Tag,
    details: TagDetails[Tag]
};

const TagItem: React.FC<TagItemProps> = ({ tag, details }) => {
    const { label, hasIcon, icon } = details;
    const encodedTag = encodeURIComponent(tag);

    if (hasIcon) {
        return (
            <Link to={`/projects?tag=${encodedTag}`} >
                <div className="control">
                    <div className="tags are-large has-addons">
                        <span className="tag icon is-dark">
                            <i className={icon} aria-hidden="true"></i>
                        </span>
                        <span className="tag is-hoverable">{label}</span>
                    </div>
                </div>
            </Link>
        );
    } else {
        return (
            <Link to={`/projects?tag=${encodedTag}`} >
                <span className="tag is-hoverable is-large">{label}</span>
            </Link>
        );
    }
};

export default TagItem;