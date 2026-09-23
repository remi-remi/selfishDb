import type { dbExportConfig } from "./launchAllExports.js"
import { db } from "./utils/knexInstance.js"

// this file is the main config for this project, 
// make sure to comply with the dbExportConfig type 
//
// ts can be used here to influence the configuration with more logic
// it could even seek orders to external api to know what should be exported
//
// YOUR CONFIGURATION SHOULD BE NAMED exportsConfig.ts 
// this file has .example because we don't want git to replace your own configuration
//
export const exportsConfig = (): dbExportConfig[] => {

   return ([
      {
         name: 'userbase',                                                 // used as filename
         knexRequest: db('user').select('id', 'last_name', 'first_name'),  // of course this could be a lot more complex 
         exportFormat: 'xlsx',
      }, {
         name: 'mailsToSpam',
         knexRequest: db('partners').select('email'),
         exportFormat: 'json',
      },
   ])
}
