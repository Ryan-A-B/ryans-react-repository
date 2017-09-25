import {Button} from "./Button.js";

export function Modal ({className, tabIndex, role, ...attributes}) {
    Object.assign(attributes, {
        className: "modal " + (className || ""),
        tabIndex: tabIndex || -1,
        role: role || "dialog"
    });

    return <div {...attributes}/>;
}

export function Dialog ({className, role, ...attributes}) {
    Object.assign(attributes, {
        className: "modal-dialog " + (className || ""),
        role: role || "document"
    });

    return <div {...attributes}/>;
}

export function Content ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "modal-content " + (className || "")
    });

    return <div {...attributes}/>;
}

export function HeaderWithoutClose ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "modal-header " + (className || "")
    });

    return <div {...attributes}/>;
}

export function Header ({children, ...attributes}) {
    return (
        <HeaderWithoutClose {...attributes}>
            <Button className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">
                    &times;
                </span>
            </Button>
            {children}
        </HeaderWithoutClose>
    );
}

export function Title ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "modal-title " + (className || "")
    });

    return <h4 {...attributes}/>;
}

export function Body ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "modal-body " + (className || "")
    });

    return <div {...attributes}/>;
}

export function FooterWithoutClose ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "modal-footer " + (className || "")
    });

    return <div {...attributes}/>;
}

export function Footer ({children, ...attributes}) {
    return (
        <FooterWithoutClose {...attributes}>
            <button type="button" className="btn btn-default" data-dismiss="modal">
                Close
            </button>
            {children}
        </FooterWithoutClose>
    );
}

export function Bare ({title, children, ...attributes}) {
    return (
        <Modal {...attributes}>
            <Dialog>
                <Content>
                    <Header>
                        <Title>
                            {title}
                        </Title>
                    </Header>
                    {children}
                </Content>
            </Dialog>
        </Modal>
    );
}

export function BareStatic ({title, children, ...attributes}) {
    Object.assign(attributes, {
        "data-backdrop": "static",
        "data-keyboard": "false"
    });

    return (
        <Modal {...attributes}>
            <Dialog>
                <Content>
                    <HeaderWithoutClose>
                        <Title>
                            {title}
                        </Title>
                    </HeaderWithoutClose>
                    {children}
                </Content>
            </Dialog>
        </Modal>
    );
}

export function Basic ({children, ...attributes}) {
    return (
        <Bare {...attributes}>
            <Body>
                {children}
            </Body>
        </Bare>
    );
}

export function Static ({children, ...attributes}) {
    return (
        <BareStatic {...attributes}>
            <Body>
                {children}
            </Body>
        </BareStatic>
    );
}
