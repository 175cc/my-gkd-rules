import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaishou.nebula',
  name: '快手极速版',
  groups: [
    {
      key: 101,
      name: '弹窗广告-打开推送通知',
      desc: '任务中心弹窗',
      enable: false,
      rules: [
        {
          key: 0,
          matches: ['@Image < View + View > View > [text="打开推送通知"]'],
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/i/31335880'],
          activityIds: [
            'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
            'com.yxcorp.gifshow.HomeActivity',
          ],
        },
      ],
    },
    {
      key: 102,
      name: '弹窗-任务完成奖励',
      desc: '任务中心弹窗',
      enable: false,
      rules: [
        {
          key: 0,
          matches: ['@View +2 [text="任务完成奖励"]'],
          snapshotUrls: ['https://i.gkd.li/i/31750726'],
          activityIds: [
            'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
            'com.yxcorp.gifshow.HomeActivity',
          ],
        },
      ],
    },
    {
      key: 103,
      name: '弹窗-开宝箱奖励已到账',
      desc: '任务中心弹窗',
      enable: false,
      rules: [
        {
          key: 0,
          matches: ['@Image < View + View >n [text="开宝箱奖励已到账"]'],
          snapshotUrls: ['https://i.gkd.li/i/31750186'],
          activityIds: [
            'com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity',
            'com.yxcorp.gifshow.HomeActivity',
          ],
        },
      ],
    },
  ],
});
