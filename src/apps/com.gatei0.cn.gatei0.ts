import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gatei0.cn.gatei0',
  name: 'Gate',
  groups: [
    {
      key: 100,
      name: '开屏弹窗-事件市场',
      desc: ' ',
      enable: false,
      rules: [
        {
          matches: ['[vid="ivClose"]'],
          fastQuery: true,
          actionMaximum: 1,
          matchTime: 5000,
          snapshotUrls: ['https://i.gkd.li/i/32115281'],
          activityIds: ['com.gateio.gateio.activity.MainActivity'],
        },
      ],
    },
  ],
});
