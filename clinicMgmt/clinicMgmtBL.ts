
/**
 * @desc takes patient details as input and directs/ sets appointment with the available and associated doctor
 * @param clinicMgmt class for the whole program
 * @param patientEntry takes patient details as input and calls patientCheckIn
 * @param patientCheckIn redirects the patient to the best suited doctor
 * @return the appointment details
 */
export { clinicMgmt }
declare var require: any
const input = require('readline-sync')
const fs = require('fs')
let docJson = fs.readFileSync('../clinicMgmt/doctors.json')
var doctor = JSON.parse(docJson)
function doctorFile() {
    let docJson = fs.readFileSync('../clinicMgmt/doctors.json')
    var doctor = JSON.parse(docJson)
    return doctor
}
doctorFile()

// let patJson = fs.readFileSync('../clinicMgmt/patients.json')
// const patient = JSON.parse(patJson)
// console.log(doctor);
// let now = new Date;
// let date = now.toDateString().split(' ');
// console.log(parseInt(date[2]));

class clinicMgmt {
    doctors: any[]
    constructor(doctors: any[]) {
        this.doctors = doctors;
    }

    findDoctorBySpl(search: string) {
        // this.sortDocs()
        let DocArr: any[] = []
        doctor.forEach(ele => {
            if (ele.specialization == search) {
                DocArr.push(ele)
            }
        })
        return DocArr
    }
    sortDocs(arr: any[]) {
        let DocArr: any[] = []
        let DocSort: any[] = []
        arr.forEach(el => {
            DocArr.push(el.patientVisit.length)
        })
        let DocArr1 = DocArr.sort()
        console.log(DocArr1);

        DocArr1.forEach(elem => {
            arr.forEach(ele => {
                if (elem == ele.patientVisit.length) {
                    DocSort.push(ele)
                    let i: number = arr.indexOf(ele)
                    arr.splice(i, 1)
                }

            })
        });

        fs.writeFileSync('../clinicMgmt/doctors.json', JSON.stringify(DocSort))
    }
    findDoctorByIDandEdit(search: number, id: number, doctor: any[], date: any) {
        doctor.forEach(ele => {
            if (ele.ID == search) {
                ele.patientVisit.push([id, date]);
                fs.writeFileSync('../clinicMgmt/doctors.json', JSON.stringify(doctor))
            }
        })
        // this.sortDocs(doctor)
    }
    // patientCheckIn(PatientDetails: any[]) {

    //     this.patients.push(PatientDetails)
    // }
    getAppointment(patients: any) {
        let now = new Date;
        let date = now.toDateString().split(' ');
        let dateNow: any = {
            day: (parseInt(date[2])), mon: date[1], year: date[3]
        }
        console.log(patients.specialization);

        let availableDocs = this.findDoctorBySpl(patients.specialization)
        // console.log(availableDocs);



        let i = 0;
        if (availableDocs[i].patientVisit.length < availableDocs[i + 1].patientVisit.length) {
            dateNow.day = (parseInt(date[2]) + Math.floor((availableDocs[i].patientVisit.length) / 5))
            if (availableDocs[i].patientVisit.length < 5) {
                let docTid = availableDocs[i].ID
                console.log(patients.Name, 'with ID', patients.ID, 'has appointment with Dr.', availableDocs[i].Name, 'on', date, availableDocs[i].shift)
                this.findDoctorByIDandEdit(docTid, patients.ID, doctor, date)
                // this.patientCheckIn(patients)
                fs.writeFileSync('../clinicMgmt/patients.json', JSON.stringify(patients))
            } else {

                let docTid = availableDocs[i].ID
                console.log(patients.Name, 'with ID', patients.ID, 'has appointment with Dr.', availableDocs[i].Name, 'on', dateNow, availableDocs[i].shift)
                this.findDoctorByIDandEdit(docTid, patients.ID, doctor, dateNow)
                // this.patientCheckIn(patients)
                fs.writeFileSync('../clinicMgmt/patients.json', JSON.stringify(patients))
            }
        } else {
            i++
            if (availableDocs[i].patientVisit.length < 5) {
                let docTid = availableDocs[i].ID
                console.log(patients.Name, 'with ID', patients.ID, 'has appointment with Dr.', availableDocs[i].Name, 'on', date, availableDocs[i].shift)
                this.findDoctorByIDandEdit(docTid, patients.ID, doctor, date)
                // this.patientCheckIn(patients)
                fs.writeFileSync('../clinicMgmt/patients.json', JSON.stringify(patients))
            } else {
                let docTid = availableDocs[i].ID
                console.log(patients.Name, 'with ID', patients.ID, 'has appointment with Dr.', availableDocs[i].Name, 'on', dateNow, availableDocs[i].shift)
                this.findDoctorByIDandEdit(docTid, patients.ID, doctor, dateNow)
                // this.patientCheckIn(patients)
                fs.writeFileSync('../clinicMgmt/patients.json', JSON.stringify(patients))
            }

        }
    };
    patientEntry() {
        let patient: any = {};
        let DocType = input.questionInt("Press 1 for Dermotologist,2 For Neurologist or 3 for Cardiologist")
        switch (DocType) {
            case (1): {
                patient.specialization = "Dermatologist"
            } break
            case (2): {
                patient.specialization = "Neurologist"
            } break
            case (3): {
                patient.specialization = "Cardiologist"
            }
        }
        patient.ID = Math.floor(Math.random() * 100)
        patient.Name = input.question("Enter the Patients Name:")
        patient.mobile = input.questionInt("Enter phone number:")
        this.getAppointment(patient)
    }
}
let myClinic = new clinicMgmt(doctor)


// myClinic.sortDocs()
// console.log(
// myClinic.findDoctorBySpl('Dermatologist'))

myClinic.patientEntry()

// myClinic.sortDocs()



