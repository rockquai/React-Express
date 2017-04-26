import * as types from '../actions/ActionTypes';

// reducers의 초기상태 정하기
// ㄴ reducers의 함수의 파라미터로 이전상태값과 액션을 전달 받음.
// ㄴ 이전상태값을 정의함. 상수 형태의 객체로 작성

const initialState = {
    number: 0,
    dummy: 'dumbdumb',
    dumbObject: {
        d: 0,
        u: 1,
        m: 2,
        b: 3
    }
};

// [방법1]
// export default function counter(state, action) {
//     // counter 함수가 실행할 때는 undefined.
//     // initialState을 반환
//     if ( typeof state === 'undefined'  ) {
//         return initialState;
//     }
//     // undefined이 아닐 경우 주어진 상태를 반환
//     return state;
// }

// [방법2] Default function parameter 사용
// 매개변수의 기본 인수를 넣는다 state가 undefined일 경우 initialState 사용
// 매개변수 action는 `index.js`에서 action 생성자 함수를 사용하게 될 때 dispatch를 통해서 전달
// counter에서 다룰 action는 increment, decrement 사용
// ㄴ increment : 기존 넘버를 불러와서 값에 +1 한 다음 새로운 객체로 반환
// reducers가 이전상태를 복사하고 변화를 주고 반환.
// ㄴ `spread operator (...)` 문법 사용

// export default function counter(state = initialState , action) {
//     switch (action.type) {
//         case type.INCREMENT:
//             return { number : state.number + 1 };
//     }
//     return state;
// }

// [방법3] spread operator (...) 사용
// `...state` 기본에 있던 state 값들(initialState)이 복사가 된다.
export default function counter(state = initialState, action) {
    /* ... */
    switch(action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1,
                dumbObject: { ...state.dumbObject, u: 0 }
            };
        case types.DECREMENT:
            return {
                ...state,
                number: state.number - 1
            };
        default:
            return state;
    }
}
