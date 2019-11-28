import { clinicMgmt } from "./clinicMgmtBL";
declare let require: any
const fs = require('fs')
let doctor = fs.readFileSync('./doctors.json')
try {
    let myClinic = new clinicMgmt(doctor)
    myClinic.patientEntry()
} catch (e) {
    console.log(e);

}