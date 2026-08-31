import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 100,
      name: '淘金币-签到',
      desc: '',
      enable: false,
      rules: [
        {
          key: 0,
          matches: ['@[text="签到领金币"] < View - View >n [text="玩游戏"]'],
          snapshotUrls: ['https://i.gkd.li/i/31626227'],
          activityIds: ['com.taobao.themis.container.app.TMSActivity'],
        },
      ],
    },
    {
      key: 101,
      name: '淘金币-收货奖励',
      desc: '',
      enable: false,
      rules: [
        {
          key: 0,
          matches: ['@[text="立即领取"] -n [text="确认收货"]'],
          actionDelay: 1000,
          snapshotUrls: ['https://i.gkd.li/i/31626227'],
          activityIds: ['com.taobao.themis.container.app.TMSActivity'],
        },
      ],
    },
  ],
});
