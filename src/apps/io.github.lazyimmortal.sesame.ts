import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'io.github.lazyimmortal.sesame',
  name: '芝麻粒-GR',
  groups: [
    {
      key: 100,
      name: '开屏提示-我知道了',
      desc: '芝麻派',
      rules: [
        {
          matches: ['[text="提示"] <<3 LinearLayoutCompat [text="我知道了"]'],
          actionMaximum: 1,
          matchTime: 3000,
          snapshotUrls: ['https://i.gkd.li/i/26322975'],
        },
      ],
    },
  ],
});
