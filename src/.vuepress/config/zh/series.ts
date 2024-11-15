import type { SeriesConfig } from 'vuepress-theme-reco/lib/types';

export const series: SeriesConfig = {
  '/docs/javascript/': [
    {
      text: 'javascrip基础',
      children: ['base01', 'base02'],
    },
    {
      text: 'javascrip进阶',
      children: [
        {
          text: '异步编程',
          children: [
            'base03',
            'base04',
          ]
        },
      ],
    },
  ],
  '/docs/plugins/': ['page', 'comments'],
}
