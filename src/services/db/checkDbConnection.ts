import { logger } from "@/lib/logger.js";
import { db } from "@/utils/knexInstance.js";

export const checkDbConnection = async () => {
   try {
      await db.raw('select 1')
   } catch (error) {
      logger.error(`Error, cant connect to db`, error);
      throw error;
   }
}
