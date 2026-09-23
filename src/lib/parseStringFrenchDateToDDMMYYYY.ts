export const parseStringFrenchDateToYYYYMMDD = (dateStr: string) => {
   const [day, month, year] = dateStr.split('/')
   return `${year}-${month}-${day}`
}
