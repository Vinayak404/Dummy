import { clinicMgmt } from "./clinicMgmtBL";
declare let require: any
const fs = require('fs')
let doctor = fs.readFileSync('./doctors.json')

let myClinic = new clinicMgmt(doctor)
myClinic.patientEntry()