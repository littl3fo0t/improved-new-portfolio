// Tag Component

import type React from "react"

interface TagProps {
    name: string,
    displayName: string
};

const Tag: React.FC<TagProps> = ({ name, displayName }) => {
    return (
        <span className="tag is-hoverable is-medium" data-name={name}>{displayName}</span>
    );
};

export default Tag;