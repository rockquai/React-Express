import React from 'react';

class Codelab extends React.Component {
    render() {
        return (
            <div>
            <h1>Hello {this.props.name}</h1>
            <h2>{this.props.number}</h2>
            <div>{this.props.children}</div>
            </div>
        );
    }
}

// Type 검증
// isRequired : 필수 입력
Codelab.propTypes = {
    name : React.PropTypes.string,
    number : React.PropTypes.number.isRequired
};

// defaultProps : 기본값 설정
Codelab.defaultProps = {
    name : 'Unknown',
    number : '50'
}

export default Codelab;
