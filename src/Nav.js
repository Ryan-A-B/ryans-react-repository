export function Base ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "nav " + (className || "")
    });

    return <nav {...attributes}/>;
}

export function Link ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "nav-link " + (className || "")
    });

    return <a {...attributes}/>;
}
