import React from 'react';
import Codelab from './Codelab';
import Counter from './Counter';
import Contact from './Contact';

class App extends React.Component {
    render(){
        return (
            // ex1. props를 이용한 예제
            // <div>
            //     <Codelab name={this.props.name} number={this.props.number}>
            //         {this.props.children}
            //     </Codelab>
            // </div>

            // ex2. state를 이용한 `Counter` 만들기 예제
            // <Counter />

            // ex3. 컴포넌트 매핑을 이용한 `Contact` 만들기
            <Contact />
        );
    }
}
export default App;
