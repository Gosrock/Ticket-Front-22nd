![Frame 34257](https://user-images.githubusercontent.com/55226431/184820864-e8573a2b-b48d-4eb9-a5f7-25ecf7192ec6.png)

<br/>

# 고스락 티켓 2.0<img src="https://user-images.githubusercontent.com/55226431/184821608-3b631082-fefa-48cf-b9d3-bf4902ddcbff.png" align=left width=100>

> 22번째 정기공연 [We are GOSROCK, Invites you] • <b>프론트엔드</b> 레포지토리

<br/><br/>

## 1. 서비스 소개

<img width="100%" alt="readme" src="https://user-images.githubusercontent.com/55226431/184920291-3959f18b-4578-4681-b476-c9a2bf7dfc48.png">

<br/><br/>

## 2. 사용 스택

<div align="left">
<div>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white">
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=storybook&logoColor=white">
</div>
<div>
<img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/Recoil-121212?style=flat-square&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/Styled-DB7093?style=flat-square&logo=styled-components&logoColor=white">
<img src="https://img.shields.io/badge/Socket.io-010101?style=flat-square&logo=socket.io&logoColor=white">
</div>
<div>
<img src="https://img.shields.io/badge/ESlint-4B32C3?style=flat-square&logo=eslint&logoColor=white">
<img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white">
<img src="https://img.shields.io/badge/Nginx-009639?style=flat-square&logo=Nginx&logoColor=white"/>
<img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
</div>
</div>

<br/>

## 3. Gosrock.band
- [Storybook](https://gosrock.github.io/Ticket-Front-22nd/?path=/story/common-inputform--%ED%9C%B4%EB%8C%80%ED%8F%B0%EB%B2%88%ED%98%B8-%EC%9E%85%EB%A0%A5)
- <b>[랜딩페이지](https://gosrock.band)</b>

<div>
<img src="https://user-images.githubusercontent.com/55226431/184898011-ab04c9e6-cc5d-4393-960b-80f00dbd3a00.gif" align='left' width="31%" >
<img src='https://user-images.githubusercontent.com/55226431/184899062-41d422ff-19f8-4ab7-993d-abd83bccf5db.gif' width='69%'>
</div>

<br/>

## 4. 웹페이지 뷰

- [Figma 링크](https://www.figma.com/file/J6HVLxWGuCFgAQUCdWBUsT/%EA%B3%A0%EC%8A%A4%EB%9D%BD-%ED%8B%B0%EC%BC%93%EC%98%88%EB%A7%A4?node-id=2026%3A6310)
- [관련 포스팅](https://9yujin.tistory.com/56?category=1025360)

<details>
<summary><h4>로그인, 인증</h4></summary>
<div>
<img src="https://user-images.githubusercontent.com/55226431/184935269-357fbb5b-8637-4fc9-bcc4-27ee9e0d3b44.png" width='100%'>
</div>
</details>

<details>
<summary><h4>티켓 예매</h4></summary>
<div>
<img src="https://user-images.githubusercontent.com/55226431/184935315-ceebf79f-3de3-4a3e-aaaf-fa2b68ef5375.png" width='100%'>
</div>
</details>

<details>
<summary><h4>티켓 QR (실시간 소켓 통신을 통한 입장확인)</h4></summary>
<div>
<img src="https://user-images.githubusercontent.com/55226431/184935407-3736a8d4-f946-4484-a598-10e5a857c635.png" width='100%'>
</div>
</details>

<details>
<summary><h4>응원톡</h4></summary>
<div>
<img src="https://user-images.githubusercontent.com/55226431/184935454-98f1e572-f7cc-4d52-8306-c47e6ac21bbc.png" width='100%'>
</div>
</details>

<details>
<summary><h4>마이페이지</h4></summary>
<div>
<img src="https://user-images.githubusercontent.com/55226431/184935486-498e561b-1eba-4dc7-9faa-8996f678483f.png" width='100%'>
</div>
</details>

<br/>

## 5. 폴더 구조

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

<br/>

## 6. 참여자
<table>
    <tr align="center">
        <td><B>Leader • Front-end • UI/UX<B></td>
        <td><B>Front-end<B></td>
        <td><B>Front-end<B></td>
        <td><B>Front-end<B></td>
    </tr>
    <tr align="center">
        <td><B>한규진<B></td>
        <td><B>정상훈<B></td>
        <td><B>서예진<B></td>
        <td><B>김주안<B></td>
    </tr>
    <tr align="center">
        <td>
            <img src="https://github.com/9yujin.png?size=100">
            <br>
            <a href="https://github.com/9yujin"><I>9yujin</I></a>
        </td>
        <td>
            <img src="https://github.com/wjdtkdgns.png?size=100" width="100">
            <br>
            <a href="https://github.com/wjdtkdgns"><I>wjdtkdgns</I></a>
        </td>
        <td>
            <img src="https://github.com/Jordizzin.png?size=100">
            <br>
            <a href="https://github.com/Jordizzin"><I>Jordizzin</I></a>
        </td>
        <td>
            <img src="https://github.com/duan-3.png?size=100" width="100">
            <br>
            <a href="https://github.com/duan-3"><I>duan-3</I></a>
        </td>
    </tr>
</table>
