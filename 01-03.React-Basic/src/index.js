import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App';

// ex1. props를 이용한 예제
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// ex2. state를 이용한 `Counter` 만들기 예제
// ReactDOM.render(
//     <App number={10}>
//         내용 내용 내용 내용 내용
//     </App>,
//     document.getElementById('root')
// );

// ex3. 컴포넌트 매핑을 이용한 `Contact` 만들기
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
