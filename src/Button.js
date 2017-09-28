export function Button ({type, className, ...attributes}) {
    Object.assign(attributes, {
        type: type || "button",
        className: "btn " + (className || "btn-default")
    });

    return <button {...attributes}/>;
}

export function Submit ({type, className, ...attributes}) {
    Object.assign(attributes, {
        type: type || "submit",
        className: className || "btn-primary"
    });

    return <Button {...attributes}/>;
}

export function CallToAction ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "btn-cta " + (className || "")
    });

    return <Submit {...attributes}/>;
}
