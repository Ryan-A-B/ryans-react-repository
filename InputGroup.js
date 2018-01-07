export const Container = ({className, ...attributes}) => {
    Object.assign(attributes, {
        className: `input-group ${className || ""}`
    });

    return <div {...attributes}/>;
};

export const Prepend = ({className, ...attributes}) => {
    Object.assign(attributes, {
        className: `input-group-prepend ${className || ""}`
    });

    return <div {...attributes}/>;
};

export const Append = ({className, ...attributes}) => {
    Object.assign(attributes, {
        className: `input-group-append ${className || ""}`
    });

    return <div {...attributes}/>;
};


export const Text = ({className, ...attributes}) => {
    Object.assign(attributes, {
        className: `input-group-text ${className || ""}`
    });

    return <span {...attributes}/>;
};

export const PrependText = ({children, ...attributes}) => {
    return (
        <Prepend {...attributes}>
            <Text>
                {children}
            </Text>
        </Prepend>
    );
};