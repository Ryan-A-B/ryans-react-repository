export function Input ({className, onChange, ...attributes}) {
    Object.assign(attributes, {
        className: "form-control",
        onChange: (e) => {onChange($(e.target).val());}
    });

    return <input {...attributes}/>
}

export function Text ({...attributes}) {
    Object.assign(attributes, {
        type: "text"
    });

    return <Input {...attributes}/>
}

export function Password ({...attributes}) {
    Object.assign(attributes, {
        type: "password"
    });

    return <Input {...attributes}/>
}

export function Email ({...attributes}) {
    Object.assign(attributes, {
        type: "email"
    });

    return <Input {...attributes}/>
}

export function Number ({...attributes}) {
    Object.assign(attributes, {
        type: "number"
    });

    return <Input {...attributes}/>
}

export function Group ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "input-group " + (className || "")
    });

    return <div {...attributes}/>
}

export function GroupAddon ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "input-group-addon " + (className || "")
    });

    return <span {...attributes}/>
}

export function Textarea ({className, onChange, ...attributes}) {
    Object.assign(attributes, {
        className: "form-control " + (className || ""),
        onChange: (e) => {onChange($(e.target).val());}
    });

    return <textarea {...attributes}/>
}
