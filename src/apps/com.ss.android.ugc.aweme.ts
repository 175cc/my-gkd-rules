import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 100,
      name: '辅助类-抖音支付积分',
      desc: '签到-返回',
      enable: false,
      resetMatch: 'app',
      activityIds: ['.cjpay.hostimpl.container.CJLiveDummyActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@ViewGroup <2 ViewGroup +2 ViewGroup >n [desc^="交一次电费" || desc^="完成1笔话费" || desc^="油价涨别慌"]',
          ],
          fastQuery: true,
          actionMaximum: 1,
          snapshotUrls: ['https://i.gkd.li/i/31876740'],
        },
        {
          preKeys: [0],
          position: {
            x: 'screenWidth/2',
            y: 'screenHeight/1.26',
          },
          matches: ['[desc^="返回"]'],
          actionDelay: 500,
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/i/31876740'],
        },
      ],
    },
  ],
});
