import React from 'react';

class Counter extends React.Component {
    // constructor 파라미터는 props는 Counter가 만들어질때 전달받을 props.
    // super를 통하여 상속받은 `React.Component`. 즉 Parent 생성자 메서드를 먼저 실행.
    // `super(props);`를 먼저 실행해줘야 `this.state`, `props`를 접근할 수 있디.
    // value 기본값
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    // handleClick()의 `this` 알 수 없으므로, 따라 this를 바인딩 해줘야 한다.
    // onClick={this.handleClick.bind(this)}
    handleClick() {
        // bad
        // this.state.value = this.state.value + 1;
        // this.forceUpdate();

        // good
        this.setState({
            value : this.state.value + 1
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.value}</h2>
                <button onClick={this.handleClick.bind(this)}>Press Me</button>
            </div>
        );
    }
}

export default Counter;
