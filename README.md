## Progressive Web Application Demo

[text](https://developer.mozilla.org/ko/docs/Web/Progressive_web_apps)

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
    https: true, // 이 옵션을 true로 하면 vite 가 알아서 인증서 만들고 한단다.. 아니면 mkcert 라는 라이브러리와 node:fs 를 사용하여 ssl 관련 파일을 읽는 옵션을 설정해줘야한다..
    port: 3000,
    open: true,
  },
});
```
