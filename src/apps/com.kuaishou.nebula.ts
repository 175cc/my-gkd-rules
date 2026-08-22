import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.kuaishou.nebula',
  name: '快手极速版',
  groups: [
    {
      key: 100,
      name: '弹窗广告-瓜分百亿金币',
      desc: '任务中心弹窗',
      rules: [
        {
          key: 0,
          matches: ['@Image < View + View > [text="瓜分百亿金币"]'],
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/i/31335133'],
          activityIds: ['com.yxcorp.gifshow.webview.KwaiYodaWebViewActivity'],
        },
      ],
    },
    {
      key: 101,
      name: '弹窗广告-打开推送通知',
      desc: '任务中心弹窗',
      rules: [
        {
          key: 0,
          matches: ['@Image < View + View > View > [text="打开推送通知"]'],
          fastQuery: true,
          snapshotUrls: ['https://i.gkd.li/i/31335880'],
          activityIds: ['com.yxcorp.gifshow.HomeActivity'],
        },
      ],
    },
  ],
});
