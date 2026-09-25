import cron from 'node-cron';
import '@/utils/env.js'
import { launchAllExports } from '@/launchAllExports.js';
const cronConfig = process.env.NODE_CRON_CONFIG! // env.ts ensure that its defined
const launchNow = process.env.EXPORT_ON_LAUNCH!

if (launchNow)
   launchAllExports()


cron.schedule(cronConfig, () => {
   launchAllExports()
});
