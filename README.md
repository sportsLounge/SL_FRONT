## SL_FRONT

#### ================ GUIDE_Start ================

### 1. git clone 이후

```bash
npm install
```

### 2. package.json 의 라이브러리 다운로드 완료 이후

```bash
npm run dev
```

```jsx
//  환경변수 "mode"에 값을 "dev" 로 주도록 설정하였음
// >> vite --mode dev
```

### 3. localhost:3000 접속

### 4. "연결이 비공개로 설정되어 있지 않습니다." 메세지가 보이면 "고급" 버튼 누르고 "localhost(안전하지 않음)(으)로 이동" 링크 클릭

### 5. Dev DB URL 사용법

```jsx
// 각 환경(dev, stg, prd)마다의 base url이 나옴
const { VITE_BASE_URL } = import.meta.env;
```

### 6. !! .env 파일이 반드시 필요하니 요청할 것

### 7. API Call 코드 generate 하기

```bash
npm run update:swagger-spec
```

### 8. ROOT 디렉토리에 /swagger-spec/download 디렉토리와 /swagger-spec/ts 디렉토리가 생성되었다면 성공

- ts 디렉토리 하위의 apis 디렉토리에서 적절한 api call function 을 사용하면 된다..
- 요청 기본 주소를 변경하고 싶다면 /ts/src 디렉토리 내의 runtime.ts 파일에 정의되어 있는 BASE_PATH 변수의 주소를 바꿔주면 된다..

#### ================ GUIDE_END ================

[MDN (pwa)](https://developer.mozilla.org/ko/docs/Web/Progressive_web_apps)

### 1. must make "manifest" file in project

### 2. how to test "PWA" on local vite-react project

```jsx
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// vite 3.0 이후 부터는 해당 라이브러리가 반드시 필요하다...
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  plugins: [react(), basicSsl()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    //@ts-expect-error 세글자
    https: true, // 이 옵션을 true로 하면 vite 가 알아서 인증서 만들고 한단다.. X / plugins 속성의 배열내의 basicSsl function call 이 하는 역할인듯..
    port: 3000, // 아니면 mkcert 라는 라이브러리와 node:fs 를 사용하여 ssl 관련 파일을 읽는 옵션을 설정해줘야한다..
    open: true,
  },
});
```
#### Lib
- three: Three.js 핵심 라이브러리
- @react-three/fiber: Three.js를 React에서 컴포넌트화하여 사용할 수 있게 해줌
- @react-three/drei: 카메라, 조명 등 다양한 3D 유틸리티 컴포넌트 제공

[개발기_주소] (https://pwa-demo-e8c14--dev-y2jd1r9p.web.app)
