export function Form ({onSubmit, ...attributes}) {
    Object.assign(attributes, {
        onSubmit: (e) => {e.preventDefault(); onSubmit();}
    });

    return <form {...attributes}/>
}
