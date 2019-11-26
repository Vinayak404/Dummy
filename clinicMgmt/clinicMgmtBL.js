"use strict";
exports.__esModule = true;
var fs = require('fs');
var docJson = fs.readFileSync('../clinicMgmt/doctors.json');
var doctor = JSON.parse(docJson);
function doctorFile() {
    var docJson = fs.readFileSync('../clinicMgmt/doctors.json');
    var doctor = JSON.parse(docJson);
    return doctor;
}
doctorFile();
var patJson = fs.readFileSync('../clinicMgmt/patients.json');
var patient = JSON.parse(patJson);
// console.log(doctor);
// let now = new Date;
// let date = now.toDateString().split(' ');
// console.log(parseInt(date[2]));
var clinicMgmt = /** @class */ (function () {
    function clinicMgmt(doctors, patients) {
        this.doctors = doctors;
        this.patients = patients;
    }
    clinicMgmt.prototype.findDoctorBySpl = function (search, doctor) {
        // this.sortDocs()
        var DocArr = [];
        doctor.forEach(function (ele) {
            if (ele.specialization == search) {
                DocArr.push(ele);
            }
        });
        return DocArr;
    };
    clinicMgmt.prototype.sortDocs = function () {
        var DocArr = [];
        var DocSort = [];
        doctor.forEach(function (el) {
            DocArr.push(el.patientVisit.length);
        });
        var DocArr1 = DocArr.sort();
        console.log(DocArr1);
        DocArr1.forEach(function (elem) {
            doctor.forEach(function (ele) {
                if (elem == ele.patientVisit.length) {
                    DocSort.push(ele);
                    var i = doctor.indexOf(ele);
                    doctor.splice(i, 1);
                }
            });
        });
        fs.writeFileSync('../clinicMgmt/doctors.json', JSON.stringify(DocSort));
    };
    clinicMgmt.prototype.findDoctorByIDandEdit = function (search, id, doctor) {
        var now = new Date;
        var date = now.toDateString().split(' ');
        doctor.forEach(function (ele) {
            if (ele.ID == search) {
                ele.patientVisit.push([id, date]);
                fs.writeFileSync('../clinicMgmt/doctors.json', JSON.stringify(doctor));
            }
        });
    };
    clinicMgmt.prototype.patientCheckIn = function (PatientDetails) {
        this.patients.push(PatientDetails);
    };
    clinicMgmt.prototype.getAppointment = function (patients) {
        var _this = this;
        var now = new Date;
        var date = now.toDateString().split(' ');
        patients.forEach(function (element) {
            var doJson = fs.readFileSync('../clinicMgmt/doctors.json');
            var dotor = JSON.parse(doJson);
            var availableDocs = _this.findDoctorBySpl(element.specialization, dotor);
            var docTid = availableDocs[0].ID;
            console.log(element.Name, 'with ID', element.ID, 'has appointment with Dr.', availableDocs[0].Name, 'on', date, availableDocs[0].shift);
            _this.findDoctorByIDandEdit(docTid, element.ID, doctor);
            fs.writeFileSync('../clinicMgmt/patients.json', JSON.stringify(patients));
            // 
        });
    };
    ;
    return clinicMgmt;
}());
exports.clinicMgmt = clinicMgmt;
var myClinic = new clinicMgmt(doctor, patient);
myClinic.sortDocs();
var patient1 = [{ "Name": "kumar", "ID": 35, "mobile": 78965412555, "specialization": "Dermatologist" }];
var patient2 = [{ "Name": "ajay", "ID": 36, "mobile": 9652112555, "specialization": "Urologist" }];
myClinic.getAppointment(patient1);
myClinic.getAppointment(patient2);
