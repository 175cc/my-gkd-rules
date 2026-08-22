import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
  groups: [
    {
      key: 100,
      name: '功能类-抖音支付积分',
      desc: '签到-返回',
      resetMatch: 'match',
      activityIds: [
        'com.ss.android.ugc.aweme.cjpay.hostimpl.container.CJLiveDummyActivity',
      ],
      rules: [
        {
          key: 0,
          matches: [
            '@ViewGroup <2 ViewGroup < ViewGroup < ViewGroup < ViewGroup < ViewPager < LinearLayout <3 ViewGroup -2 ViewGroup >n [desc="更多服务  按钮"]',
          ],
          fastQuery: true,
          actionMaximum: 1,
          snapshotUrls: ['https://i.gkd.li/i/27329258'],
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
          snapshotUrls: ['https://i.gkd.li/i/27329598'],
        },
      ],
    },
  ],
});
