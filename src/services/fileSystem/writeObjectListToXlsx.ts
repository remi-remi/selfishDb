import * as XLSX from 'xlsx'

export const writeObjectListToXlsx = (destination: string, dataObjectList: Record<string, string>[]) => {

   const worksheet = XLSX.utils.json_to_sheet(dataObjectList);
   const workbook = XLSX.utils.book_new();
   XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet");
   XLSX.writeFile(workbook, destination);
}
