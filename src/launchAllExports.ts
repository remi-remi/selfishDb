import type { Knex } from "knex";
import * as path from "path";
import { logger } from "./lib/logger.js";
import { exportsConfig } from "./exportsConfig.js";
import { writeExportFileAcordingToFormat } from "./services/fileSystem/writeExportFileAcordingToFormat.js";
import { ensurePathPresentAndWritable } from "./services/fileSystem/ensurePathPresentAndWritable.js";
import '@/utils/env.js'
const exportRootDir = process.env.EXPORT_DIR! // env.ts ensure that its defined

export type exportFormatAvaiblable = 'xlsx' | 'json'

export type dbExportConfig = {
   name: string,
   knexRequest: Knex.QueryBuilder,
   exportFormat: exportFormatAvaiblable,
}

export const launchAllExports = async () => {

   const configs = exportsConfig()

   for (const config of configs) {
      logger.info(`--- Starting export: ${config.name} ---`)

      try {

         const exportResult = await config.knexRequest
         logger.info(`Export "${config.name}" fetched ${exportResult.length} rows`)
         const exportDestination = path.join(exportRootDir, `${config.name}.${config.exportFormat}`)

         try {
            ensurePathPresentAndWritable(exportDestination)
            writeExportFileAcordingToFormat(exportDestination, exportResult, config.exportFormat)
            logger.info(`--- Finished export: ${config.name} ---`)
         } catch (e) {
            logger.error('failed to write file e: ', e)
            logger.error(`--- Export Failed for ${config.name} ---`)
         }


      } catch (e) {
         logger.error(`Error during export "${config.name}": ${e}`)
         throw new Error(`error during export "${config.name}": ${e}`)
      }
   }

}
