import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 100,
      name: '辅助类-抖音支付积分',
      desc: '签到-精灵球',
      enable: false,
      resetMatch: 'app',
      activityIds: ['.cjpay.hostimpl.container.CJLiveDummyActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '@ViewGroup < ViewGroup < LinearLayout < HorizontalScrollView < ScrollView <2 ViewGroup < ViewGroup + ViewGroup >n [desc^="抖音月付"]',
          ],
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
    {
      key: 101,
      name: '辅助类-抖音积分',
      desc: '签到-点框',
      enable: false,
      resetMatch: 'app',
      activityIds: ['.cjpay.hostimpl.container.CJLiveDummyActivity'],
      rules: [
        {
          key: 0,
          matches: [
            '(@ViewGroup - [desc="玩法已升级"]) || (@ViewGroup <2 ViewGroup +3 ViewGroup >n [desc^="成功取现" || desc^="交一次"])',
          ],
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
