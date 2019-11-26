export { clinicMgmt }
declare var require: any

const fs = require('fs')
let docJson = fs.readFileSync('../clinicMgmt/doctors.json')
var doctor = JSON.parse(docJson)
function doctorFile() {
    let docJson = fs.readFileSync('../clinicMgmt/doctors.json')
    var doctor = JSON.parse(docJson)
    return doctor
}
doctorFile()

let patJson = fs.readFileSync('../clinicMgmt/patients.json')
const patient = JSON.parse(patJson)
// console.log(doctor);
// let now = new Date;
// let date = now.toDateString().split(' ');
// console.log(parseInt(date[2]));

class clinicMgmt {
    doctors: any[]
    patients: any[]
    constructor(doctors: any[], patients: any[]) {
        this.doctors = doctors;
        this.patients = patients;
    }

    findDoctorBySpl(search: string, doctor: any[]) {
        // this.sortDocs()
        let DocArr: any[] = []
        doctor.forEach(ele => {
            if (ele.specialization == search) {
                DocArr.push(ele)
            }
        })
        return DocArr
    }
    sortDocs() {
        let DocArr: any[] = []
        let DocSort: any[] = []
        doctor.forEach(el => {
            DocArr.push(el.patientVisit.length)
        })
        let DocArr1 = DocArr.sort()
        console.log(DocArr1);

        DocArr1.forEach(elem => {
            doctor.forEach(ele => {
                if (elem == ele.patientVisit.length) {
                    DocSort.push(ele)
                    let i: number = doctor.indexOf(ele)
                    doctor.splice(i, 1)
                }

            })
        });

        fs.writeFileSync('../clinicMgmt/doctors.json', JSON.stringify(DocSort))
    }
    findDoctorByIDandEdit(search: number, id: number, doctor: any[]) {
        let now = new Date;
        let date = now.toDateString().split(' ');
        doctor.forEach(ele => {
            if (ele.ID == search) {
                ele.patientVisit.forEach(element => {

                });
                ele.patientVisit.push([id, date]);
                fs.writeFileSync('../clinicMgmt/doctors.json', JSON.stringify(doctor))
            }
        })
    }
    patientCheckIn(PatientDetails: any[]) {

        this.patients.push(PatientDetails)
    }
    getAppointment(patients) {
        let now = new Date;
        let date = now.toDateString().split(' ');
        patients.forEach(element => {
            let doJson = fs.readFileSync('../clinicMgmt/doctors.json')
            const dotor = JSON.parse(doJson)
            let availableDocs = this.findDoctorBySpl(element.specialization, dotor)
            let docTid = availableDocs[0].ID
            if (availableDocs[0].patientVisit)
                console.log(element.Name, 'with ID', element.ID, 'has appointment with Dr.', availableDocs[0].Name, 'on', date, availableDocs[0].shift)
            this.findDoctorByIDandEdit(docTid, element.ID, doctor)
            fs.writeFileSync('../clinicMgmt/patients.json', JSON.stringify(patients))
            // 
        });

    };

}
let myClinic = new clinicMgmt(doctor, patient)


myClinic.sortDocs()
let patient1 = [{ "Name": "kumar", "ID": 35, "mobile": 78965412555, "specialization": "Dermatologist" }]
let patient2 = [{ "Name": "ajay", "ID": 36, "mobile": 9652112555, "specialization": "Urologist" }]
myClinic.getAppointment(patient1)
myClinic.getAppointment(patient2)
myClinic.sortDocs()



