import { setTimeout } from 'timers/promises';
import { logger } from './logger.js';

export async function end(code: number, milliSeconds = 5000): Promise<never> {
   logger.debug(`end(${code}, ${milliSeconds}) called, start waiting...`)
   await setTimeout(milliSeconds);
   logger.debug(`end() exit now`)
   process.exit(code);
}

