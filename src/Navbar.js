export function Container ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "navbar " + (className || "navbar-expand-md navbar-light bg-light")
    });

    return <nav {...attributes}/>;
}

export function Brand ({href, className, ...attributes}) {
    Object.assign(attributes, {
        href: href || "/",
        className: "navbar-brand " + (className || "")
    });

    return <a {...attributes}/>
}

export function Toggle ({target, className, children, ...attributes}) {
    Object.assign(attributes, {
        type: "button",
        className: "navbar-toggler " + (className || ""),
        children: children || <span className="navbar-toggler-icon"/>,
        "data-toggle": "collapse",
        "data-target": "#" + target,
        "aria-controls": target,
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
    });

    return <button {...attributes}/>;
}

export function Collapse ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "collapse navbar-collapse " + (className || "")
    });

    return <div {...attributes}/>;
}

export function Nav ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "navbar-nav " + (className || "")
    });

    return <div {...attributes}/>;
}

export function Link ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "nav-item nav-link " + (className || "")
    });

    return <a {...attributes}/>;
}
