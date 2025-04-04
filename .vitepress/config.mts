import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WIKI",
  description: "NambuWiki Next",
  titleTemplate: '南武文库 > :title',

  lang: 'zh-CN',

  base: '/W/', // 由于部署时路径的需要
})
