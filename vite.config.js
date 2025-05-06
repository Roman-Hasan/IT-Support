import { resolve } from "path";
import { defineConfig }  from "vite";

export default define defineConfig({
   build: {
      rollupOptions: {
         input: {
             main: resolve(__dirname, "index.html"),
        },
      },
   },
});