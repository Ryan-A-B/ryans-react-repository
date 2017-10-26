export const FontAwesome = ({icon, className, ...attributes}) => {
    Object.assign(attributes, {
        className: `fa fa-${icon} ${className || ""}`
    });

    return <i {...attributes}/>
};
