![Frame 34257](https://user-images.githubusercontent.com/55226431/184820864-e8573a2b-b48d-4eb9-a5f7-25ecf7192ec6.png)

<br/><br/>

# 고스락 티켓 2.0<img src="https://user-images.githubusercontent.com/55226431/184821608-3b631082-fefa-48cf-b9d3-bf4902ddcbff.png" align=left width=100>

> 22번째 정기공연 [We are GOSROCK, Invites you] • <b>프론트엔드</b> 레포지토리

<img width="100%" alt="readme" src="https://user-images.githubusercontent.com/55226431/184882909-ff460464-c1d0-4c47-abd3-9c39c0520a98.png">

<br/><br/>

## 사용 스택

<div align="left">
<div>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=storybook&logoColor=white">
</div>

<div>
<img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/Recoil-121212?style=flat-square&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=styled-components&logoColor=white">
</div>
<div>
<img src="https://img.shields.io/badge/ESlint-4B32C3?style=flat-square&logo=eslint&logoColor=white">
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white">
<img src="https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=Nginx&logoColor=white"/>
<img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
</div>
</div>

<br/>

## 기획, 디자인
- [Figma 링크](https://www.figma.com/file/J6HVLxWGuCFgAQUCdWBUsT/%EA%B3%A0%EC%8A%A4%EB%9D%BD-%ED%8B%B0%EC%BC%93%EC%98%88%EB%A7%A4?node-id=2026%3A6310)
- [관련 포스팅](https://9yujin.tistory.com/56?category=1025360)

<br/>

## 폴더 구조

```bash
├── .github # 액션 워크플로우 세팅
├── .storybook # 스토리북 세팅
├── public
├── src
│   ├── apis # api 관련 파일 (에러 핸들링, axios 설정, 타입)
│   ├── assets # 에셋 파일
│   ├── components # 컴포넌트 파일
│   ├── hooks # 커스텀 훅
│   │   └── queries # 리액트 쿼리 관련
│   ├── pages
│   ├── stores # 리코일 관련 파일
│   ├── styles # GlobalStyle, ThemeProvider
│   ├── utils
│   ├── App.tsx
│   └── index.tsx
└── # configs
```
