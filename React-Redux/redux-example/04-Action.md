###### inflearn - velopert님 강의
##### [React & Express 를 이용한 웹 어플리케이션 개발하기](https://www.inflearn.com/course/react-%EA%B0%95%EC%A2%8C-velopert/)

## 섹션 5. Redux
- Redux: 배경지식 | MVC, FLUX
- Redux: 특징과 흐름
- Redux: 프로젝트 준비, 구조 및 컴포넌트 생성
- `Redux: Action`
- Redux: Reducer
- Redux: Store
- Redux: react-redux | 컴포넌트에서 사용하기

---

### 4. Action
1. 값을 `증가` 시키기 (+1) : INCREMENT
2. 값을 `감소` 시키기 (-1) : DECREMENT
3. 새로운 색상 설정하기 : SET_COLOR

#### `actions / ActionTypes.js` 생성
- action 이름을 `상수` 형태로 만들어고 다른 파일에서 불러와서 사용 할 수 있도록 내보낸다
- action 객체이다
- `type`종류에 따라서 redux가 일을 한다.
- action이 생성될 때마다 객체를 생성하는 건 귀찮은 일이다. action 생성자 함수 이용

```js
// action 형태
{ type: "INCREMENT" }
{ type: "DECREMENT" }
{ type: "SET_COLOR",
  color: [200,200,200] // 배열로 RGB
}
```

```js
// ActionTypes.js
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const SET_COLOR = "SET_COLOR";
```

#### Action 생성자 함수 `actions / index.js` 생성
- 파일이름이 `index.js` 이유는 actions 디렉토리만 불러왔을 때, 자동으로 로드 되기 위함.
- `ActionTypes.js`에 `export`만 있는 경우에는 `export default`가 없다. 아래 코드처럼 불러오면 된다.

```js
// index.js
// 방법1.
import { INCREMENT, DECREMENT, SET_COLOR } from './ActionTypes';

// 방법2. 좀 더 쉬운 방법 : 각 상수에 접근이 가능다.
import * as types from './ActionTypes';

export function increment() {
    return {
        type: type.INCREMENT
    };
}

export function decrement() {
    return {
        type: type.DECREMENT
    };
}

export function setColor(color) {
    return {
        type: type.SET_COLOR,
        color
    };
}
```
