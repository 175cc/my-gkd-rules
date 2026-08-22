import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hexin.android.futures',
  name: '同花顺期货通',
  groups: [
    {
      key: 100,
      name: '开屏弹窗-实盘报名',
      desc: ' ',
      rules: [
        {
          matches: ['[vid="closeImageView"][clickable=true]'],
          actionMaximum: 1,
          matchTime: 5000,
          snapshotUrls: ['https://i.gkd.li/i/26212429'],
          activityIds: ['com.hexin.plat.android.Hexin'],
        },
      ],
    },
    {
      key: 101,
      name: '开屏弹窗-打开通知',
      desc: ' ',
      rules: [
        {
          matches: [
            'Button[vid="open_push_in_awaken_dialog"] -n RelativeLayout[vid="close_awaken_dialog"][clickable=true]',
          ],
          actionMaximum: 1,
          matchTime: 5000,
          snapshotUrls: ['https://i.gkd.li/i/26212436'],
          activityIds: ['com.hexin.plat.android.Hexin'],
        },
      ],
    },
  ],
});
