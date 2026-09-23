import { logger } from "./logger.js";

const isSameValue = (a: unknown, b: unknown): boolean => {
   if (typeof a === 'string' && typeof b === 'string') {
      return a.localeCompare(b, undefined, { sensitivity: 'base' }) === 0
   }
   return a === b
}

export const diffObject = <O extends Record<string, unknown>>(
   object1: O,
   object2: Partial<O>,
): Partial<O> => {

   let diff: Partial<O> = {};

   for (const key in object1) {
      if (!isSameValue(object1[key], object2?.[key])) {
         diff[key] = object1[key];
      }
   }

   return diff;
};
