import * as Nav from "./Nav.js";

export function Tabs ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "nav-tabs " + (className || ""),
        role: "tablist"
    });

    return <Nav.Base {...attributes}/>;
}

export function Tab ({target, active, className, ...attributes}) {
    Object.assign(attributes, {
        role: "tab",
        className: "nav-item " + (active ? "active " : "") + (className || ""),
        "data-toggle": "tab",
        href: "#" + target,
        "aria-controls": target,
        "aria-expanded": (active ? "true" : "false")
    });

    return <Nav.Link {...attributes}/>;
}

export function Content ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "tab-content " + (className || "")
    });

    return <div {...attributes}/>;
}

export function Pane ({id, className, ...attributes}) {
    Object.assign(attributes, {
        id,
        className: "tab-pane " + (className + ""),
        role: "tabpanel",
        "aria-labelledby": id + "-tab"
    });

    return <div {...attributes}/>;
}
