export function Input ({className, onChange, ...attributes}) {
    Object.assign(attributes, {
        className: "form-control " + (className || ""),
        onChange: (e) => onChange(e.target.value)
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

export function Telephone ({...attributes}) {
    Object.assign(attributes, {
        type: "tel"
    });

    return <Input {...attributes}/>
}
export const Phone = Telephone;

export function Number ({...attributes}) {
    Object.assign(attributes, {
        type: "number"
    });

    return <Input {...attributes}/>
}

export function Numeral ({...attributes}) {
    Object.assign(attributes, {
        type: "text"
    });

    return <Input {...attributes}/>;
}

export function Textarea ({className, onChange, ...attributes}) {
    Object.assign(attributes, {
        className: "form-control " + (className || ""),
        onChange: (e) => onChange(e.target.value)
    });

    return <textarea {...attributes}/>
}

export function Select ({options, onChange, className, ...attributes}) {
    Object.assign(attributes, {
        className: "form-control " + (className || ""),
        onChange: (e) => onChange(e.target.value)
    });

    return (
        <select {...attributes}>
            {lodash.map(options, (value, key) => <option value={value} key={value}>{key}</option>)}
        </select>
    );
}

const makeCheckedInput = (name) => {
    return ({checked, className, ...attributes}) => {
        Object.assign(attributes, {
            role: 'button',
            className: `${name} ${checked ? 'checked' : ''} ${className || ''}`
        });

        return <div {...attributes}/>;
    };
};

export const Checkbox = makeCheckedInput("check-button");
export const Radio = makeCheckedInput("radio-button");
