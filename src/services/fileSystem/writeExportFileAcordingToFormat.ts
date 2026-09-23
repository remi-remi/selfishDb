import type { exportFormatAvaiblable } from "@/launchAllExports.js";
import { writeObjectListToXlsx } from "./writeObjectListToXlsx.js";
import { writeObjectListToJson } from "./writeObjectListToJson.js";

export const writeExportFileAcordingToFormat = (
   destination: string,
   data: Record<any, any>[],
   exportFormat: exportFormatAvaiblable
) => {
   switch (exportFormat) {
      case "xlsx":
         writeObjectListToXlsx(destination, data)
         break;
      case "json":
         writeObjectListToJson(destination, data)
         break;
      default: {
         // this won't happen, but its used to force TS to yell if all types not implemented
         const _exhaustiveCheck: never = exportFormat; // type json not assignable to never mean that ^
         throw new Error(`Format d'export non géré: ${_exhaustiveCheck}`);
      }
   }
};
