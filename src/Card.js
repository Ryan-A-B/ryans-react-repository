export function Container ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "card " + (className || "")
    });

    return <div {...attributes}/>;
}

export function Header ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "card-header " + (className || "")
    });

    return <div {...attributes}/>
}

export function Body ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "card-body " + (className || "")
    });

    return <div {...attributes}/>
}

export function Title ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "card-title " + (className || "")
    });

    return <h4 {...attributes}/>
}
