// usage
// formatDate(new Date()) // "2026-03-24_10-11-55"
export const jsDateTimeToFrenchDateTime = (date: Date) => {
   const pad = (n: number) => String(n).padStart(2, '0')

   const year = date.getUTCFullYear()
   const month = pad(date.getUTCMonth() + 1)
   const day = pad(date.getUTCDate())
   const hours = pad(date.getUTCHours())
   const mins = pad(date.getUTCMinutes())
   const secs = pad(date.getUTCSeconds())

   return `${year}-${month}-${day}_${hours}-${mins}-${secs}`
}
