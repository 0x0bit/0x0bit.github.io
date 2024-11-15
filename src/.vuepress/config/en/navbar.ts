import type { NavbarConfig } from 'vuepress-theme-reco/lib/types';

export const navbar: NavbarConfig = [
  { text: 'Home', link: '/en/', icon: 'IconHome' },
  {
    text: 'javascript',
    icon: 'IconDocument',
    children: [
      {
        text: 'javscript',
        children: [
          { text: 'javascript basics', link: '/en/docs/javascript/base01' },
          { text: 'javascript advanced', link: '/en/docs/javascript/base03' },
        ],
      },
      {
        text: 'plugins',
        children: [
          { text: 'page', link: '/en/docs/plugins/page' },
          { text: 'comments', link: '/en/docs/plugins/comments' },
        ],
      },
    ],
  },
  { text: 'Intro', link: '/en/intro', icon: 'IconCompass' },
  { text: 'Message board', link: '/en/docs/others/message-board', icon: 'IconChat' },
]
