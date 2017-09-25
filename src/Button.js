export function Button ({role, className, ...attributes}) {
    Object.assign(attributes, {
        role: role || "button",
        className: "btn " + (className || "btn-default")
    });

    return <button {...attributes}/>;
}
