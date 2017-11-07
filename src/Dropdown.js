import * as Button from "./Button.js";

export function Dropdown ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "dropdown " + (className || ""),
    });

    return <div {...attributes}/>;
}
export const Container = Dropdown;

export function Toggle ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "btn-primary dropdown-toggle",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
    });

    return <Button.Button {...attributes}/>
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
