class WithFocus extends React.Component {
    constructor (props) {
        super(props);

        this.state = {hasFocus: false};

        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.blur = this.blur.bind(this);
    }

    componentDidMount () {
        $(document).on("click", this.onClick);
    }

    componentWillUnmount () {
        $(document).off("click", this.onClick);
    }

    onClick (e) {
        if (!$.contains(this.component, e.originalEvent.target)) {
            this.setState({hasFocus: false});
        } else if (!this.state.hasFocus) {
            this.setState({hasFocus: true});
        }
    }

    onFocus (e) {
        e.stopPropagation();

        this.setState({hasFocus: true});
    }

    blur () {
        this.setState({hasFocus: false});
    }
}

module.exports = WithFocus;
