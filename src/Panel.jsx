export function Container ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "panel " + (className || "panel-default")
    });

    return <div {...attributes}/>;
}

export function Header ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "panel-heading " + (className || "")
    });

    return <div {...attributes}/>;
}

export function Title ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "panel-title " + (className || "")
    });

    return <h4 {...attributes}/>;
}

export function Body ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "panel-body " + (className || "")
    });

    return <div {...attributes}/>;
}

export function Footer ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "panel-footer " + (className || "")
    });

    return <div {...attributes}/>;
}

export function Group ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "panel-group " + (className || "")
    });

    return <div {...attributes}/>;
}

export function CollapseHeader ({target, ...attributes}) {
    Object.assign(attributes, {
        role: "button",
        "data-toggle": "collapse",
        "data-target": `#${target}`,
        "aria-expanded": "false",
        "aria-controls": target
    });

    return <Header {...attributes}/>;
}

export function Collapse ({className, ...attributes}) {
    Object.assign(attributes, {
        role: "tabpanel",
        className: "panel-collapse collapse" + (className || "")
    });

    return <div {...attributes}/>;
}

export function Basic ({title, children, ...attributes}) {
    return (
        <Container {...attributes}>
            <Header>
                <Title>
                    {title}
                </Title>
            </Header>
            <Body>
                {children}
            </Body>
        </Container>
    );
}

export function Collapsible ({collapseId, title, children, ...attributes}) {
    return (
        <Container {...attributes}>
            <CollapseHeader target={collapseId}>
                <Title>
                    {title}
                </Title>
            </CollapseHeader>
            <Collapse id={collapseId}>
                <Body>
                    {children}
                </Body>
            </Collapse>
        </Container>
    );
}
