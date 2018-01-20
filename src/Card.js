//import uuid from "uuid/v4";
import * as Collapse from "./Collapse.js";
import * as Misc from "./Misc.js";

export function Container ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "card " + (className || "")
    });

    return <div {...attributes}/>;
}

export function Header ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "card-header " + (className || "")
    });

    return <div {...attributes}/>
}

export const CollapseHeader = Collapse.makeToggle(Header);

export function Body ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "card-body " + (className || "")
    });

    return <div {...attributes}/>
}

export function Title ({className, ...attributes}) {
    Object.assign(attributes, {
        className: "card-title " + (className || "")
    });

    return <h4 {...attributes}/>
}

export function Basic ({header, children, ...attributes}) {
    return (
        <Container {...attributes}>
            <Header>
                {header}
            </Header>
            <Body>
                {children}
            </Body>
        </Container>
    );
}

/*export class Collapsible extends React.Component {
    constructor (props) {
        super(props);

        this.hash = uuid();
    }

    render () {
        const {show, header, children, ...attributes} = this.props;

        return (
            <Container {...attributes}>
                <CollapseHeader target={this.hash}>
                    {header}
                </CollapseHeader>
                <Collapse.Container id={this.hash} show={show}>
                    <Body>
                        {children}
                    </Body>
                </Collapse.Container>
            </Container>
        );
    }
};*/
