import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hexin.android.futures',
  name: '同花顺期货通',
  groups: [
    {
      key: 100,
      name: '开屏弹窗-实盘报名',
      desc: ' ',
      enable: false,
      rules: [
        {
          matches: ['[vid="closeImageView"][clickable=true]'],
          actionMaximum: 1,
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
          actionMaximum: 1,
          matchTime: 5000,
          snapshotUrls: ['https://i.gkd.li/i/26212436'],
          activityIds: [
            'com.hexin.plat.android.Hexin',
            'com.hexin.plat.android.AndroidLogoActivity',
          ],
        },
      ],
    },
    {
      key: 102,
      name: '开屏弹窗-立即报名',
      desc: ' ',
      enable: false,
      fastQuery: true,
      rules: [
        {
          matches: ['[vid="closeImageView"]'],
          actionMaximum: 1,
          matchTime: 5000,
          snapshotUrls: ['https://i.gkd.li/i/32204123'],
          activityIds: [
            'com.hexin.plat.android.Hexin',
            'com.hexin.plat.android.AndroidLogoActivity',
          ],
        },
      ],
    },
  ],
});
