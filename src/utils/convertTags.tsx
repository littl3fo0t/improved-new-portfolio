import type { Skill } from "../types/skill";
import skills from "../data/skills";

const convertTag = (tag: string) => {
    const found = skills.find(({ displayName }) => displayName === tag);

    if (found) {
        return found;
    } else {
        return {
            name: tag,
            displayName: tag,
            hasAddons: false,
            iconName: null,
            rank: -1
        } as Skill;
    }
};

export default convertTag;