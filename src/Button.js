export const Basic = ({className, ...attributes}) => {
    Object.assign(attributes, {
        type: "button",
        className: `btn ${className || "btn-light"}`
    });

    return <button {...attributes}/>;
};

export const Submit = ({type, className, ...attributes}) => {
    Object.assign(attributes, {
        type: type || "submit",
        className: className || "btn-primary"
    });

    return <Basic {...attributes}/>;
};

export const CallToAction = ({className, ...attributes}) => {
    Object.assign(attributes, {
        className: "btn-cta " + (className || "")
    });

    return <Submit {...attributes}/>;
};

export const Close = ({className, ...attributes}) => {
    Object.assign(attributes, {
        type: "button",
        className: `close ${className || ""}`,
        'aria-label': "Close",
        children: <span aria-hidden="true">&times;</span>
    });

    return <button {...attributes}/>;
};