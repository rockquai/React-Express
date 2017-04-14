import React, { Component, PropTypes } from 'react';
import Value from './Value';
import Control from './Control';

const propTypes = {

};

const defaultProps = {

};

class Counter extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Value />
                <Control />
            </div>
        );
    }
}

Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

export default Value;
