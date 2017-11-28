export const Container = ({show, className, ...attributes}) => {
    Object.assign(attributes, {
        role: "tabpanel",
        className: `collapse ${className || ""} ${show ? "show" : ""}`
    });

    return <div {...attributes}/>;
};

export const makeToggle = (Component) => {
    return ({target, ...attributes}) => {
        Object.assign(attributes, {
            role: 'button',
            'data-toggle': 'collapse',
            'data-target': `#${target}`,
            'aria-expanded': "false",
            'aria-controls': target
        });

        return <Component {...attributes}/>;
    };
};
