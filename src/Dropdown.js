export function Dropdown ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "dropdown " + (className || ""),
    });

    return <div {...attributes}/>;
}

export function Toggle ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "btn-primary dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
    });

    return <R3.Button.Button {...attributes}/>
}

export function Menu ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "dropdown-menu " + (className || "")
    });

    return <div {...attributes}/>;
}

export function Item ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "dropdown-item " + (className || "")
    });

    return <a {...attributes}/>;
}
