import * as Button from "./Button";

export const Container = ({className, ...attributes}) => {
    Object.assign(attributes, {
        className: `modal ${className || ""}`,
        tabIndex: "-1",
        role: "dialog"
    });

    return <div {...attributes}/>;
};

export const Dialog = ({className, ...attributes}) => {
    Object.assign(attributes, {
        className: `modal-dialog ${className || ""}`,
        role: "document"
    });

    return <div {...attributes}/>;
};

export const Content = ({className, ...attributes}) => {
    Object.assign(attributes, {
        className: `modal-content ${className || ""}`
    });

    return <div {...attributes}/>;
};

export const Header = ({className, ...attributes}) => {
    Object.assign(attributes, {
        className: `modal-header ${className || ""}`
    });

    return <div {...attributes}/>;
};

export const HeaderWithClose = ({children, ...attributes}) => {
    return (
        <Header>
            {children}
            <Button.Close data-dismiss="modal"/>
        </Header>
    );
};

export const Title = ({className, ...attributes}) => {
    Object.assign(attributes, {
        className: `modal-title ${className || ""}`
    });

    return <h5 {...attributes}/>;
};

export const Body = ({className, ...attributes}) => {
    Object.assign(attributes, {
        className: `modal-body ${className || ""}`
    });

    return <div {...attributes}/>;
};

export const Footer = ({className, ...attributes}) => {
    Object.assign(attributes, {
        className: `modal-footer ${className || ""}`
    });

    return <div {...attributes}/>;
};

export const FooterWithClose = ({children, ...attributes}) => {
    return (
        <Footer>
            <Button.Basic data-dismiss="modal">
                Close
            </Button.Basic>
        </Footer>
    );
};

export const Bare = ({children, ...attributes}) => {
    return (
        <Container {...attributes}>
            <Dialog>
                <Content>
                    {children}
                </Content>
            </Dialog>
        </Container>
    );
};

export const BareStatic = ({...attributes}) => {
    Object.assign(attributes, {
        "data-backdrop": "static",
        "data-keyboard": "false"
    });

    return <Bare {...attributes}/>;
};

const makeBasicLayout = (Bare) => {
    return ({children, title, ...attributes}) => {
        return (
            <Bare {...attributes}>
                <HeaderWithClose>
                    <Title>
                        {title}
                    </Title>
                </HeaderWithClose>
                <Body>
                    {children}
                </Body>
                <FooterWithClose/>
            </Bare>
        );
    };
};

export const Basic = makeBasicLayout(Bare);
export const Static = makeBasicLayout(BareStatic);
