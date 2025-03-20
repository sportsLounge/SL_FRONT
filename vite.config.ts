import { ConfigEnv, defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// reference : https://vite.dev/config/
//@ts-ignore
export default defineConfig(({command,mode}:ConfigEnv) => {
  const env = loadEnv(mode, process.cwd());
  
  console.info("Mode : ", mode);
  console.info("Current Working Directory : ", process.cwd());
  console.info("Load Env : ", env);

  return {
    plugins: [react(), tailwindcss(), basicSsl()],
    define: {
      "process.env.NODE_ENV" : JSON.stringify(env),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      //@ts-ignore
      // https: true,
      port: 3000,
      open: true,
    },
  }
});
