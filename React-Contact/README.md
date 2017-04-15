###### inflearn 강의
##### [React & Express 를 이용한 웹 어플리케이션 개발하기](https://www.inflearn.com/course/react-%EA%B0%95%EC%A2%8C-velopert/)

## 섹션 4. 주소록(CONTACT)만들기
- Contact 검색기능 구현 | input, sort, filter
- Contact 선택기능 구현 | React.js 기초개념 응용
- state 내부 배열 처리하기 | Immutability Helper / ES6 spread
- Contact 추가/삭제/수정 기능 구현 | Immutability Helper 적용하기
- Contact 데이터 추가기능 구현 | 컴포넌트 응용
- Contact 데이터 삭제/수정 기능 구현 | 컴포넌트 응용
- Contact 엑스트라 기능 구현 i | KeyPress, ref
- Component LifeCycle API
- Contact 데이터 새로고침해도 유지하기 | localStorage

## About
React 기본 작업 환경
- babel 을 통한 ES6 변환
- webpack-dev-server 사용
- react-hot-loader 를 통한 Hot Module Reload 사용
React CodeLab 에서 작업환경 설정을 할 때 사용 된 코드 입니다.


## 설치하기

```sh
git clone https://github.com/velopert/react-codelab-fundamentals.git
npm install -g webpack webpack-dev-server
npm install
# npm install 과정이 오래 걸린다면, 다음과 같이 node_modules.zip 을 다운로드 받아서 압축을 해제하세요:
wget https://github.com/velopert/react-codelab-fundamentals/releases/download/1.0/node_modules.zip
unzip node_modules.zip -d node_modules
```

## 실행하기

```
npm run dev-server
```

서버는 포트 4000 으로 실행됩니다. 변경은 webpack.config.js 에서 할 수 있습니다.
