import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tw.nekomimi.nekogram',
  name: 'Nekogram',
  groups: [
    {
      key: 100,
      name: '开屏弹窗-稍后升级',
      desc: '',
      enable: false,
      rules: [
        {
          matches: ['[desc="请稍后提醒我"][clickable=true]'],
          actionMaximum: 1,
          matchTime: 5000,
          snapshotUrls: ['https://i.gkd.li/i/31599785'],
        },
      ],
    },
  ],
});
