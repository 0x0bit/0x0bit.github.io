import * as zhConfig from './zh/index.js'
import * as enConfig from './en/index.js'
import { RecoThemeData } from 'vuepress-theme-reco/lib/types'

export const themeConfig: RecoThemeData = {
  locales: {
    '/': {
      selectLanguageName: '简体中文',
      lastUpdatedText: '最后更新时间',
      navbar: zhConfig.navbar,
      series: zhConfig.series,
      bulletin: zhConfig.bulletin,
      catalogTitle: '页面导航',
      tip: '提示',
      info: '信息',
      warning: '警告',
      danger: '危险',
      details: '详情',
      editLinkText: '编辑当前页面',
      notFound: '哇哦，没有发现这个页面！',
      backToHome: '返回首页'
    },
    '/en/': {
      selectLanguageName: 'English',
      navbar: enConfig.navbar,
      series: enConfig.series,
      bulletin: enConfig.bulletin,
    },
  },
  colorMode: 'dark',
  logo: '/logo.png',
  author: '今夜',
  docsRepo: 'https://github.com/0x0bit',
  docsBranch: 'main',
  docsDir: '/docs',
  socialLinks: undefined,

  algolia: {
    appId: 'C1FNVXMFYC',
    apiKey: 'cd2fbb4554fc7a2ff36f295c7861fb04',
    indexName: 'jy_',
    inputSelector: '### REPLACE ME ####',
    algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
    debug: false // Set debug to true if you want to inspect the dropdown
  },

}
