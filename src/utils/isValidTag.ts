import Tag from "../types/tag";

const isValidTag = (tag: string): tag is Tag => {
    return Object.values(Tag).includes(tag as Tag);
};

export default isValidTag;