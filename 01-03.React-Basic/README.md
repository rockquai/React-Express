###### inflearn - velopert님 강의
##### [React & Express 를 이용한 웹 어플리케이션 개발하기](https://www.inflearn.com/course/react-%EA%B0%95%EC%A2%8C-velopert/)

## 섹션 1, 2, 3. React Basic
- React 소개 (장점, 단점, 특징)
- 실행
- props<br>
    - props를 이용한 예제<br>
- state <br>
    - state를 이용한 `Counter` 만들기 <br>
- 컴포넌트 매핑 (Component Mapping) <br>
    - 컴포넌트 매핑을 이용한 `Contact` 만들기 <br>

---

### [React 소개](https://velopert.com/775)
#### React
- React는 페이스북에서 개발한 유저인터페이스 라이브러리로서 개발자로 하여금 재사용 가능한 UI를 생성.
- 페이스북, 인스타그램, 야후, 넷플릭스를 포함한 많은 큰 서비스에서 사용.

#### React의 장점
- 배우기 간단하다
- 뛰어난 `Garbage Collection` 메모리 관리 성능
- 서버 & 클라이언트 렌더링 (이를 통해 브라우저측의 초기 렌더링 딜레이를 줄이고, SEO 호환도 가능)
- Component의 가독성이 매우 높고 간단하여 쉬운 유지보수가 가능
- 매우 간편한 UI 수정 및 재사용
- 페이스북이 밀어준다
- 다른 프레임워크나 라이브러리와 혼용가능

#### React의 단점
- `VIEW ONLY` 어플리케이션의 View 레이어만 다루므로 이 외의 부분은 다른 기술을 사용해야 함
    - Ajax, Router 등의 기능은 직접 구현하거나 다른 모듈을 설치하여 사용.
- React 버전 v15부터 `IE8 이하 버전을 지원하지 않는다`

#### React의 특징
- `Virtual DOM` 을 사용
- `JSX` : JSX 는 JavaScript 의 확장 문법
- `Components` : React는 모두 Component 에 대한 것. React 개발을 할 때는 모든 것을 Component 로서 생각

---

### 실행

```
$ npm run dev-server
```

### props
- props는 부모 컴포넌트로부터 물려받는 속성
- 컴포넌트 내부의 `Immutable Data`
- JSX 내부에 `{ this.props.propsName }`
- 컴포넌트를 사용 할 때, < > 괄호 안에 `propsName="value"`
- `this.props.children`은 기본적으로 갖고있는 props로서, `<Cpnt>여기에 있는 값이 들어간다.</Cpnt>`

#### props를 이용한 예제

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
```

```js
// App.js
import React from 'react';
import Codelab from './Codelab';

class App extends React.Component {
    render(){
        return (
            <Codelab
                name={this.props.name}
                number={this.props.number}
            >
                {this.props.children}
            </Codelab>
        );
    }
}
export default App;
```

```js
// Codelab.js
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
```

---

### state
- 컴포넌트 내부에서 값을 변경, 활용하기 위한 데이터.
- 유동적인 데이터
- JSX 내부에 `{ this.state.stateName }`
- 초기값 설정이 필수, 생성자(constructor) 에서 `this.state = { }` 으로 설정
- 값을 수정 할 때에는 `this.setState({ val: 'new_val' })`, 렌더링 된 다음엔 `this.state =` 절대 사용하지 말것
- React에서 사용하는 이벤트 시스템은 브라우저에서 사용되는 JavaScript의 네이티브 이벤트와 같은 인터페이스를 가지고 있다

#### state를 이용한 `Counter` 만들기

```js
// App.js
import React from 'react';
import Counter from './Counter';

class App extends React.Component {
    render(){
        return (
            <Counter />
        );
    }
}
export default App;
```

```js
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
```

---

### 컴포넌트 매핑 (Component Mapping)<br>
- 비슷한 코드를 반복해서 렌더링하는 방법

#### JavaScript - Map()

```js
arr.map(callback, [thisArg])
```

- `map()` 메소드는 파라미터로 전달 된 함수를 통하여 배열 내의 각 요소를 처리해서 그 결과로 새로운 배열을 생성.
- `callback` 새로운 배열의 요소를 생성하는 함수로서, 다음 세가지 인수를 가집니다.
    - `currentValue` 현재 처리되고 있는 요소
    - `index` 현재 처리되고 있는 요소의 index 값
    - `array` 메소드가 불려진 배열
- `thisArg` (선택항목) callback 함수 내부에서 사용 할 this 값을 설정

```js
let numbers = [1, 2, 3, 4, 5];

let result = numbers.map((num) => {
    return num*num;
});
```

#### 컴포넌트 매핑을 이용한 `Contact` 만들기

```js
// index.js
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
```

```js
// App.js
import React from 'react';
import Contact from './Contact';

class App extends React.Component {
    render(){
        return (
            <Contact />
        );
    }
}
export default App;
```

```js
// Contact.js
import React from 'react';
import ContactInfo from './ContactInfo';

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contactData: [
                { name : 'Abet', phone : '010-0000-0001' },
                { name : 'Betty', phone : '010-0000-0002' },
                { name : 'Charlie', phone : '010-0000-0003' },
                { name : 'David', phone : '010-0000-0004' }
            ]
        }
    }

    // rendering 내부에 메소드 생성
    render() {
        const mapToComponents = (data) => {
            return data.map( (contact, index) => {
                return (<ContactInfo contact={contact} key={index}/>);
            });
        };
        // mapToComponents() 메소드 사용하기
        return (
            <div>
                <h1>Contacts</h1>
                <div>{mapToComponents(this.state.contactData)}</div>
            </div>
        );
    }
}

export default Contact;
```

```js
// ContactInfo.js
import React from 'react';

class ContactInfo extends React.Component {
  render() {
    return (
      <div>{this.props.contact.name} {this.props.contact.phone}</div>
    )
  }
}

export default ContactInfo;
```
