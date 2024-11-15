import type { NavbarConfig } from 'vuepress-theme-reco/lib/types';

export const navbar: NavbarConfig = [
  { text: '首页', link: '/', icon: 'IconHome' },
  {
    text: 'javascript',
    icon: 'IconDocument',
    children: [
      {
        text: 'javscript',
        children: [
          { text: 'javascript基础', link: '/docs/javascript/base01' },
          { text: 'javascript进阶', link: '/docs/javascript/base03' },
        ],
      },
      {
        text: '插件',
        children: [
          { text: 'page', link: '/docs/plugins/page' },
          { text: 'comments', link: '/docs/plugins/comments' },
        ],
      },
    ],
  },
  { text: '介绍', link: '/intro', icon: 'IconCompass' },
  { text: '留言板', link: '/docs/others/message-board', icon: 'IconChat' },
]
