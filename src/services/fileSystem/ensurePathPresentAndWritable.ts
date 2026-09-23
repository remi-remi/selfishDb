import { logger } from "@/lib/logger.js"
import path from "path"
import * as fs from "fs";

export const ensurePathPresentAndWritable = (filePath: string) => {
   const dir = path.dirname(filePath)

   try {
      logger.debug(`mkdirSync ${dir}`)
      fs.mkdirSync(dir, { recursive: true })
   } catch (e) {
      throw new Error(`Cannot create directory "${dir}" for export file "${filePath}": ${e}`)
   }

   try {
      fs.accessSync(dir, fs.constants.W_OK)
   } catch (e) {
      throw new Error(`Directory "${dir}" is not writable for export file "${filePath}": ${e}`)
   }
}
