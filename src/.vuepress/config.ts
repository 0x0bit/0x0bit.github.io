import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from "vuepress";
import { revealJsPlugin } from '@vuepress/plugin-revealjs'

import theme from './theme/index.js'

export default defineUserConfig({
  bundler: viteBundler(),
  theme,
  locales: {
    "/": {
      lang: "zh-CN",
      title: "今夜",
      description: "今夜的博客分享技术、生活、感悟、旅行、美食、音乐等",
    },
    "/en/": {
      lang: "en-US",
      title: "tonight",
      description: "Tonight's blog shares technology, life, insights, travel, food, music and more",
    },

  },

  plugins: [
    revealJsPlugin({}),
  ],
})