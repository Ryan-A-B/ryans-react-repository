export class Component extends React.Component {
    componentWillUpdate (nextProps) {
        lodash.each(nextProps, (nextValue, key) => {
            const value = this.props[key];

            if (value != nextValue) {
                console.log(key, value, nextValue);
            }
        });
    }
}
