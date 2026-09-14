import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
  groups: [
    {
      key: 100,
      name: '功能类-抖音支付积分',
      desc: '签到-返回',
      enable: false,
      resetMatch: 'app',
      activityIds: [
        'com.ss.android.ugc.aweme.cjpay.hostimpl.container.CJLiveDummyActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '@ViewGroup < ViewGroup < LinearLayout < HorizontalScrollView < ScrollView <2 ViewGroup < ViewGroup + ViewGroup > ViewGroup > [desc^="抖音月付" || desc^="放心借"]',
          ],
          actionMaximum: 1,
          snapshotUrls: ['https://i.gkd.li/i/31875727'],
        },
        {
          preKeys: [0],
          position: {
            x: 'screenWidth/2',
            y: 'screenHeight/1.26',
          },
          matches: ['[desc^="返回"]'],
          actionDelay: 400,
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/i/31875727'],
        },
      ],
    },
  ],
});
