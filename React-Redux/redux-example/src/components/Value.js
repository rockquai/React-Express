import React, { Component, PropTypes } from 'react';

const propTypes = {
    number: PropTypes.number
};

const defaultProps = {
    //기본값
    number: -1
};

class Value extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    }
}

Value.propTypes = propTypes;
Value.defaultProps = defaultProps;

export default Value;
