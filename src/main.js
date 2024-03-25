import { createApp } from 'vue'
import App from './App.vue'

// Import our custom CSS
import '../src/assets/scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// 全域function
import tools from "./utils/tools";

// 路由工具
// npm install vue-router@4
import router from "./router";

// 使用Svg圖片工具，vite.config.js setting
// npm i vite-plugin-svg-icons
import 'virtual:svg-icons-register'
import SvgIcon from "@/components/common/icons/SvgIcon.vue";

// moment.js
// npm install moment
import moment from "moment";

const app = createApp(App)



// 全域常數provide，用於各組件inject(注入)
app.provide("$global", {
    tools,
    moment
});

app.use(router);

app.component("svg-icon", SvgIcon);

app.mount('#app')
