import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
  groups: [
    {
      key: 100,
      name: '弹窗-开心收下',
      desc: '',
      enable: false,
      rules: [
        {
          matches: ['@[desc="关闭"] - [text="开心收下"][visibleToUser=true]'],
          snapshotUrls: ['https://i.gkd.li/i/31876740'],
          activityIds: [
            'com.ss.android.ugc.aweme.cjpay.hostimpl.container.CJLiveDummyActivity',
          ],
        },
      ],
    },
    {
      key: 101,
      name: '辅助类-支付积分',
      desc: '签到-精灵球',
      enable: false,
      resetMatch: 'app',
      rules: [
        {
          key: 0,
          matches: [
            '@ViewGroup < ViewGroup < LinearLayout < HorizontalScrollView < ScrollView <2 ViewGroup < ViewGroup + ViewGroup >n [desc^="抖音月付"][visibleToUser=true]',
          ],
          actionMaximum: 1,
          activityIds: [
            'com.ss.android.ugc.aweme.cjpay.hostimpl.container.CJLiveDummyActivity',
          ],
        },
        {
          key: 1,
          preKeys: [0],
          matches: [
            '@ViewGroup < ViewGroup + ViewGroup[desc^="返回"][visibleToUser=true]',
          ],
          actionDelay: 500,
          actionMaximum: 1,
          //坐标()
          // position: {
          // x: 'screenWidth/2',
          // y: 'screenHeight/1.56',
          // },
        },
        {
          key: 2,
          preKeys: [1],
          position: {
            x: 'screenWidth/2',
            y: 'screenHeight/1.29',
          },
          matches: ['[desc^="返回"][visibleToUser=true]'],
          actionDelay: 500,
          actionMaximum: 1,
        },
      ],
    },
  ],
});
