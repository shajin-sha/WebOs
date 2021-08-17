let date = new Date()
let year =  date.getFullYear().toString()
let OsDateTHIS = date.toDateString().split(year)[0]
export let  OsDate =  OsDateTHIS  

