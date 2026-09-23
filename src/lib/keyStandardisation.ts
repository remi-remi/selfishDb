import { removeAccents } from "./removeAcents.js";

export const keyStandardization = (key: string): string =>
   removeAccents(
      key
         .normalize("NFKC")
         .toLowerCase()
         .replace(/\s+/g, "")
         .trim()
   )
