import { ConfigEnv, defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import path from "path";

// reference : https://vite.dev/config/
//@ts-ignore
export default defineConfig(({ _command, mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd());

  console.info("Mode : ", mode);
  console.info("Current Working Directory : ", process.cwd());
  console.info("Load Env : ", env);

  return {
    plugins: [react(), basicSsl()],
    base: "/",
    define: {
      "process.env.NODE_ENV": JSON.stringify(env),
      __APP_ENV__: JSON.stringify(env.VITE_APP_ENV),
      __API_URL__: JSON.stringify(env.VITE_API_URL),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 3000,
      open: true,
    },
  };
});
