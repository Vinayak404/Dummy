"use strict";
exports.__esModule = true;
var fs = require('fs');
var docJson = fs.readFileSync('../clinicMgmt/doctors.json');
var doctor = JSON.parse(docJson);
console.log(doctor);
var clinicMgmt = /** @class */ (function () {
    function clinicMgmt(doctors, patients) {
        this.doctors = doctors;
        this.patients = patients;
    }
    clinicMgmt.prototype.findDoctorBySpl = function (search) {
    };
    clinicMgmt.prototype.patientCheckIn = function (PatientDetails) {
        var now = new Date;
        var date = now.toDateString().split(' ');
    };
    return clinicMgmt;
}());
exports.clinicMgmt = clinicMgmt;
