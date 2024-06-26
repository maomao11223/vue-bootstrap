import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url";
import path from "path";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  createSvgIconsPlugin({
    // Specify the icon folder to be cached
    iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
    // Specify symbolId format
    symbolId: "icon-[dir]-[name]",
  }),],
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/assets/scss/styles.scss")],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  }
})
