// ex1.
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './components/App';
//
// // store 생성
// import { createStore } from 'redux';
// import reducers from './reducers';
//
// import * as actions from './actions';
//
// // store를 만들때는 createStore() 메소드를 사용하며 reducer가 인수로 사용.
// const store = createStore(reducers);
//
// // 테스트
// console.log(store.getState());
// const unsubscribe = store.subscribe(() => console.log(store.getState()));
// store.dispatch(actions.increment());
// store.dispatch(actions.increment());
// store.dispatch(actions.decrement());
// store.dispatch(actions.setColor([200, 200, 200]));
//
// unsubscribe();
// // unsubscribe 때문에 아래 코드 실행 되지 않음.
// store.dispatch(actions.setColor([210, 210, 210]));
//
//
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );


// ex2.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// store 생성
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

// store를 만들때는 createStore() 메소드를 사용하며 reducer가 인수로 사용.
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
