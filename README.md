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
$ npm start


## 🔨 Build


# npm
$ npm install
$ npm run build



## 🖥 Browsers support

Modern browsers and Internet Explorer 10+.
```

## ✨ 프로젝트 구조

```bash
ProjectRoot (기준 2022/02/06)
├── public                  //
│ └── fonts
└── src
├── api                     // 프로젝트내 사용되는 APIs
├── assets                  // 정적 파일
│ ├── header
│ └── logo
├── locales                 // I18n Stringtable
│ ├── en-US
│ └── th-TH
├── mock                    // Mock API 용
│ └── mirage
│ └── factory
├── pages                   // Page별 소스 하위 메뉴는 Router
│ ...
│ ├── contentManager
│ │ ├── vehicleAccessories  // 1차 spec out
│ │ │ └── [model]           // 동적 Routing []
│ │ ├── vehicleContent
│ │ │ └── components        // 해당 페이지 내에서만 사용하는 컴포넌트
│ │ │ ├── modelContentTable
│ │ │ ├── productInfo
│ │ │ └── uploadRotateImageModal
│ │ └── vehiclePackages     // 1차 spec out
│ │ └── [id]
│ │ └── edit
│ ├── layout                // 프로젝트 Layout 구정
│ │ └── tagView
│ ├── login                 // Login 화면
│ ├── product               // 메뉴 1Depth
│ │ ├── accessories         // 1차 spec out
│ │ │ └── [model]
│ │ ├── packages            // 1차 spec out
│ │ │ └── [id]
│ │ │ └── edit
│ │ ├── vehicleDisplay
│ │ │ └── components
│ │ │ ├── categoryDetailTable
│ │ │ ├── categoryModelSetting
│ │ │ ├── categoryTreeView
│ │ │ └── variantColorSetting
│ │ └── vehicleRegistration
│ │ ├── [productId]         // 동적 라우팅 메뉴
│ │ ├── components          // 해당 vehicleRegistration 메뉴에서 사용하는 컴포넌트
│ │ │ ├── productColor
│ │ │ ├── productInfo
│ │ │ ├── productSpec
│ │ │ └── vehicleRegistrationForm
│ │ └── write
│ └── signup                // 회원가입 페이지
├── querys                  // react-query
├── reuse                   // 재사용 컴포넌트
│ ├── components            // 재사용 컴포넌트
│ │ ├── draggableTable
│ │ ├── errorboundary
│ │ ├── modal
│ │ ├── multiLangSelect
│ │ └── searchForm
│ ├── config                // 시스템 설정?
│ ├── constants             ?? constants라기보단...
│ ├── hooks                 // 공통 Hooks
│ ├── type                  // 프로젝트내 사용되는 Type정의
│ │ ├── layout
│ │ ├── mock
│ │ └── user
│ └── utils                 // utils function
├── routes                  // router 설정 파일
├── stores                  // Recoil Store
├── styles                  // Project내 전반적인 Style
└── types                 // 전역 타입 \*.d.ts
```

## ✨ 신규 메뉴 추가

```bash
1. Pages 관리
  a. 메뉴 단계별 Folder로 구성
  b. 폴더명은 카멜케이스로 작성
  c. 동적라우팅 메뉴는 Brackets([productId]) 기호로 폴더 생성
  d. Default: index.tsx
2. Router 관리
  a. MenuPath 등록
   - 경로: src/reuse/constants/menuPath.ts
   - 1Depth메뉴: PascalCase
   - 2Depth메뉴: KebabCase
  b. Page Title
   - 경로: src/locales/{df:en-US}/user/title.ts
  c. Route
   - 경로: src/routes/index.tsx
   - Chunk기준: 메뉴별 나눔
3. 상태관리(Recoil) 관리
  a. 경로: src/stores/{\*}.store.ts
4. API 관리
  a. 경로: src/api/{_}Api.ts (_.api.ts)
  b. NamingRule: (get|save|update|delete)으로 시작
  c. Page단에서 API 파일을 바로 호출하지 않음.
5. ReactQuery 관리
  a. 경로: src/querys/\*.ts
  b. src/querys/index.ts의 등록
6. Type 관리
  a. 종속정인 타입은 해당 Component에서 관리
  b. 재사용정 타입은 src/types/[name]d.\*.ts 에서 관리.
```
