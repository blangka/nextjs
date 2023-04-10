<h1 align="center">프로젝트명</h1>

<div align="center">

프로젝트 설명

</div>

## ✨ Features

- **TypeScript**
- **React-Query** 
- **Emotion**
- **StoryBook**

## 📦 Install

```bash
$ git clone https://github.com/blangka/nextjs.git
$ cd basic

# npm
$ npm install
$ npm run dev:dev
```

## 🔨 Build
```bash

# npm
$ npm install
$ npm run build:dev
```

## 📐 StoryBook 
```bash

# npm
$ npm run storybook

http://localhost:6006/ 으로 접속
```

## 🖥 Browsers support

Modern browsers and Internet Explorer 10+.
```

## ✨ 프로젝트 구조

```bash
ProjectRoot (기준 2022/02/06)
├── components              // 화면을 그리는 공통 부분
├── containers              // component를 사용하고 동작(store, click등) 수행
├── hooks                   // custom hook  
├── pages                   // Page
├── stores                  // recoil atom store  
├── querys                  // react-query
├── util                    // 공통 함수
└── types                   // 전역 타입 \*.d.ts
```

## ✨ 프로젝트 규칙

```bash
1. 폰트
  - aws에 upload된 web font를 styles/global.scss에 font-face 한것을 사용한다.
2. components
  - 화면을 그리는 최하위의 단위로 StoryBook을 꼭 넣어 준다.
3. style
  - 같은 폴더 내에 .style.tsx를 추가하고 emotion css를 사용한다.
  - .tsx 에서는 style과 관련된 부분을 넣지 않는다.
4. 코딩 컨벤션
  - prettier 설정으로 기본 규칙 적용
  - eslint recommend를 활용하고 변경이 필요한 lint 규칙은 추가 후 사용
```


## 🖥 예제

```bash
1. env 
  a. 경로 : /sample/env
  b. npm run dev:{??} 실행 환경에 따라서 env 파일 값을 받아오도록 되어 있습니다.
2. emotion, storybook
  a. 경로 : /sample/emotion
  b. components에 구성된 basicButton은 Storybook, emotion으로 된 styles로 되어 있습니다.
3. react-query
  a. 경로 : /sample/reactquery
  b. 참고자료 : https://kyounghwan01.github.io/blog/React/react-query/basic/#api
  c. useQuery 와 useMutation 을 활용한 데이터 패칭
```
