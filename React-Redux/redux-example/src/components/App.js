import React from 'react';
import Counter from './Counter';

const propTypes = {
};

const defaultProps = {
};

class App extends React.Component {

    render() {
        return (
            <Counter />
        );
    }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
