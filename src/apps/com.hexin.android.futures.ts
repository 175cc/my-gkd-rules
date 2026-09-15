import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hexin.android.futures',
  name: '同花顺期货通',
  groups: [
    {
      key: 100,
      name: '开屏弹窗-报名',
      desc: ' ',
      enable: false,
      fastQuery: true,
      rules: [
        {
          matches: ['[vid="closeImageView"]'],
          actionDelay: 300,
          matchTime: 5000,
          snapshotUrls: ['https://i.gkd.li/i/26212429'],
          activityIds: [
            'com.hexin.plat.android.Hexin',
            'com.hexin.plat.android.AndroidLogoActivity',
          ],
        },
      ],
    },
    {
      key: 101,
      name: '开屏弹窗-打开通知',
      desc: ' ',
      enable: false,
      fastQuery: true,
      rules: [
        {
          matches: ['@ImageView < [vid="close_awaken_dialog"]'],
          actionDelay: 300,
          matchTime: 5000,
          snapshotUrls: ['https://i.gkd.li/i/26212436'],
          activityIds: [
            'com.hexin.plat.android.Hexin',
            'com.hexin.plat.android.AndroidLogoActivity',
          ],
        },
      ],
    },
  ],
});
