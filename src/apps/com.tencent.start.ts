import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.start',
  name: '腾讯START云游戏',
  groups: [
    {
      key: 100,
      name: '自动勾选协议',
      desc: '登录页',
      enable: false,
      rules: [
        {
          key: 0,
          matches: ['[vid="check_protocol"]'],
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/i/31626045'],
          activityIds: ['.ui.LoginDialogActivity'],
        },
      ],
    },
  ],
});
