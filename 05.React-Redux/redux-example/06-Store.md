###### inflearn - velopert님 강의
##### [React & Express 를 이용한 웹 어플리케이션 개발하기](https://www.inflearn.com/course/react-%EA%B0%95%EC%A2%8C-velopert/)

## 섹션 5. Redux
- Redux: 배경지식 | MVC, FLUX
- Redux: 특징과 흐름
- Redux: 프로젝트 준비, 구조 및 컴포넌트 생성
- Redux: Action
- Redux: Reducer
- `Redux: Store`
- Redux: react-redux | 컴포넌트에서 사용하기

---

### 6. Store
- 애플리케이션의 현재상태를 지니고 있음.
- redux를 사용하는 애플리케이션은 단 하나의 store가 있어야 힘.
- store를 만들려고 하면 `createStore` 를 불러온 다음 `createStore()` 메소드를 사용하며 reducer가 인수로 사용됩니다.

#### src / index.js

```js
import { createStore } from 'redux';
import reducers from './reducers';

const store = createStore(reducers);
```

#### Store Methods
- `dispatch(action)` : action을 redux로 보낸다. dispatch가 실행되면 store는 redux함수에 현재 자신 상태와 방금 전달받은 action을 전달해 준다. redux가 어떠한 변화가 필요한지 감지하여 변화를 주고 새로운 상태를 주면 현 상태로 업데이트.
- `getState()` : 현재 상태를 반환하는 함수.
- `subscribe(listener)` : 상태가 바뀔 때마다 실행할 함수를 등록. `listener` 상태가 바뀔 때마다 실행될 콜백함수.
- `replaceReducer(nextReducer)` : hot reloading과 코드 분할을 할 때 사용. 별로 사용하지 않는다.
