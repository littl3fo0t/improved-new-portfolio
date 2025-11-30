// Badge Component

interface BadgeProps {
    name: string;
    displayName: string;
    iconName: string[] | null;
};

const Badge: React.FC<BadgeProps> = ({ name, displayName, iconName }) => {
    return (
        <div className="control">
            <div className="tags are-medium has-addons">
                <span className="tag icon is-dark">
                    <i className={iconName?.join(" ")} aria-hidden="true"></i>
                </span>
                <span className="tag is-hoverable" data-name={name}>{displayName}</span>
            </div>
        </div>
    );
};

export default Badge;