import { logger } from "@/lib/logger.js"
import * as fs from "fs";

export const writeObjectListToJson = async (filePath: string, data: any[]) => {

   try {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
      logger.info(`Wrote ${filePath} with ${data.length} rows`)
   } catch (e) {
      throw new Error(`Failed to write json file at "${filePath}": ${e}`)
   }
}
