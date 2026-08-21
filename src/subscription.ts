import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 175,
  name: 'id667的补充订阅',
  version: 20260821,
  author: '175cc',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/175cc/my-gkd-rules',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
