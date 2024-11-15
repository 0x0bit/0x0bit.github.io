import type { SeriesConfig } from 'vuepress-theme-reco/lib/types';

export const series: SeriesConfig = {
  '/en/docs/javascript/': [
    {
      text: 'javascript basics',
      children: ['base01', 'base02'],
    },
    {
      text: 'javascript advanced',
      children: [
        {
          text: 'async code',
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
