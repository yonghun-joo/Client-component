# Client-component

설계
storybook/을 사용하여 웹 컴포넌트 UI 미리보기 및 테스트 가능
src/components/ 폴더에 WebView와 연결될 웹 컴포넌트를 정의
src/bridges/ 폴더에 WebView와 연결될 브릿지 인터페이스를 정의

폴더 구성
📂 web
├── 📂 .storybook/ # Storybook 구성
├── 📂 libs/ # 웹 정적 라이브러리 (echarts.js)
├── 📂 src/ # 웹 컴포넌트 소스 코드
    ├── 📂 components/ # 그래픽 컴포넌트 (예: 차트, 테이블 등)
    ├── 📂 bridges/ # 웹 브릿지 (Web ↔ Native)
    ├── 📂 utils/ # 공통 유틸리티 함수
├── 📂 stories/ # Storybook 구성 파일
├── package.json # Node.js 프로젝트 설정
├── README.md

설치 & 실행
1. npm install
2. npm start - localhost:5050(몰라)
3. npm run storybook - 스토리북 실행

고민
- src 폴더 git submodule 구성?