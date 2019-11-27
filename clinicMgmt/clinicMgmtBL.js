"use strict";
exports.__esModule = true;
var input = require('readline-sync');
var fs = require('fs');
var docJson = fs.readFileSync('../clinicMgmt/doctors.json');
var doctor = JSON.parse(docJson);
function doctorFile() {
    var docJson = fs.readFileSync('../clinicMgmt/doctors.json');
    var doctor = JSON.parse(docJson);
    return doctor;
}
doctorFile();
// let patJson = fs.readFileSync('../clinicMgmt/patients.json')
// const patient = JSON.parse(patJson)
// console.log(doctor);
// let now = new Date;
// let date = now.toDateString().split(' ');
// console.log(parseInt(date[2]));
var clinicMgmt = /** @class */ (function () {
    function clinicMgmt(doctors) {
        this.doctors = doctors;
    }
    clinicMgmt.prototype.findDoctorBySpl = function (search) {
        // this.sortDocs()
        var DocArr = [];
        doctor.forEach(function (ele) {
            if (ele.specialization == search) {
                DocArr.push(ele);
            }
        });
        return DocArr;
    };
    clinicMgmt.prototype.sortDocs = function (arr) {
        var DocArr = [];
        var DocSort = [];
        arr.forEach(function (el) {
            DocArr.push(el.patientVisit.length);
        });
        var DocArr1 = DocArr.sort();
        console.log(DocArr1);
        DocArr1.forEach(function (elem) {
            arr.forEach(function (ele) {
                if (elem == ele.patientVisit.length) {
                    DocSort.push(ele);
                    var i = arr.indexOf(ele);
                    arr.splice(i, 1);
                }
            });
        });
        fs.writeFileSync('../clinicMgmt/doctors.json', JSON.stringify(DocSort));
    };
    clinicMgmt.prototype.findDoctorByIDandEdit = function (search, id, doctor, date) {
        doctor.forEach(function (ele) {
            if (ele.ID == search) {
                ele.patientVisit.push([id, date]);
                fs.writeFileSync('../clinicMgmt/doctors.json', JSON.stringify(doctor));
            }
        });
        // this.sortDocs(doctor)
    };
    // patientCheckIn(PatientDetails: any[]) {
    //     this.patients.push(PatientDetails)
    // }
    clinicMgmt.prototype.getAppointment = function (patients) {
        var now = new Date;
        var date = now.toDateString().split(' ');
        var dateNow = {
            day: (parseInt(date[2])), mon: date[1], year: date[3]
        };
        console.log(patients.specialization);
        var availableDocs = this.findDoctorBySpl(patients.specialization);
        // console.log(availableDocs);
        var i = 0;
        if (availableDocs[i].patientVisit.length < availableDocs[i + 1].patientVisit.length) {
            dateNow.day = (parseInt(date[2]) + Math.floor((availableDocs[i].patientVisit.length) / 5));
            if (availableDocs[i].patientVisit.length < 5) {
                var docTid = availableDocs[i].ID;
                console.log(patients.Name, 'with ID', patients.ID, 'has appointment with Dr.', availableDocs[i].Name, 'on', date, availableDocs[i].shift);
                this.findDoctorByIDandEdit(docTid, patients.ID, doctor, date);
                // this.patientCheckIn(patients)
                fs.writeFileSync('../clinicMgmt/patients.json', JSON.stringify(patients));
            }
            else {
                var docTid = availableDocs[i].ID;
                console.log(patients.Name, 'with ID', patients.ID, 'has appointment with Dr.', availableDocs[i].Name, 'on', dateNow, availableDocs[i].shift);
                this.findDoctorByIDandEdit(docTid, patients.ID, doctor, dateNow);
                // this.patientCheckIn(patients)
                fs.writeFileSync('../clinicMgmt/patients.json', JSON.stringify(patients));
            }
        }
        else {
            i++;
            if (availableDocs[i].patientVisit.length < 5) {
                var docTid = availableDocs[i].ID;
                console.log(patients.Name, 'with ID', patients.ID, 'has appointment with Dr.', availableDocs[i].Name, 'on', date, availableDocs[i].shift);
                this.findDoctorByIDandEdit(docTid, patients.ID, doctor, date);
                // this.patientCheckIn(patients)
                fs.writeFileSync('../clinicMgmt/patients.json', JSON.stringify(patients));
            }
            else {
                var docTid = availableDocs[i].ID;
                console.log(patients.Name, 'with ID', patients.ID, 'has appointment with Dr.', availableDocs[i].Name, 'on', dateNow, availableDocs[i].shift);
                this.findDoctorByIDandEdit(docTid, patients.ID, doctor, dateNow);
                // this.patientCheckIn(patients)
                fs.writeFileSync('../clinicMgmt/patients.json', JSON.stringify(patients));
            }
        }
    };
    ;
    clinicMgmt.prototype.patientEntry = function () {
        var patient = {};
        var DocType = input.questionInt("Press 1 for Dermotologist,2 For Neurologist or 3 for Cardiologist");
        switch (DocType) {
            case (1):
                {
                    patient.specialization = "Dermatologist";
                }
                break;
            case (2):
                {
                    patient.specialization = "Neurologist";
                }
                break;
            case (3): {
                patient.specialization = "Cardiologist";
            }
        }
        patient.ID = Math.floor(Math.random() * 100);
        patient.Name = input.question("Enter the Patients Name:");
        patient.mobile = input.questionInt("Enter phone number:");
        this.getAppointment(patient);
    };
    return clinicMgmt;
}());
exports.clinicMgmt = clinicMgmt;
var myClinic = new clinicMgmt(doctor);
// myClinic.sortDocs()
var patient1 = { "Name": "kumar", "ID": 35, "mobile": 78965412555, "specialization": "Dermatologist" };
var patient2 = { "Name": "ajay", "ID": 36, "mobile": 9652112555, "specialization": "Neurologist" };
// console.log(
// myClinic.findDoctorBySpl('Dermatologist'))
myClinic.patientEntry();
// myClinic.sortDocs()
