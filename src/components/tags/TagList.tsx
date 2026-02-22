// TagList Component

import type React from "react";
import type TagDetails from "../../types/tagDetails";
import type Tag from "../../types/tag";
import TagItem from "./TagItem";

interface TagListProps {
    tags: Partial<TagDetails>;
};

const TagList: React.FC<TagListProps> = ({ tags }) => {
    const sortedTags = (Object.entries(tags) as [Tag, TagDetails[Tag]][])
        .sort(([, a], [, b]) => a.order - b.order);

    return (
        <div className="field is-grouped is-grouped-multiline">
            { sortedTags.map(([tag, details]) => <TagItem key={tag} tag={tag} details={details} />) }
        </div>
    );
};

export default TagList;