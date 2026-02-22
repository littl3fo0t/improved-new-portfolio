import Tag from "./tag";

type TagDetails = {
    [tag in Tag]: {
        label: string,
        hasIcon: boolean,
        icon?: string,
        order: number,
        isTechnical: boolean
    }
};

export default TagDetails;