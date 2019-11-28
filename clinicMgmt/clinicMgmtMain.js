"use strict";
exports.__esModule = true;
var clinicMgmtBL_1 = require("./clinicMgmtBL");
var fs = require('fs');
var doctor = fs.readFileSync('./doctors.json');
var myClinic = new clinicMgmtBL_1.clinicMgmt(doctor);
myClinic.patientEntry();
