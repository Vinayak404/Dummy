export { clinicMgmt }
declare var require: any

const fs = require('fs')
let docJson = fs.readFileSync('../clinicMgmt/doctors.json')
const doctor = JSON.parse(docJson)
console.log(doctor);

class clinicMgmt {
    doctors: any[]
    patients: any[]
    constructor(doctors: any[], patients: any[]) {
        this.doctors = doctors;
        this.patients = patients;
    }

    findDoctorBySpl(search: string, doctor: any[]) {
        let DocArr: any[] = []
        doctor.forEach(ele => {
            if (ele.specialization == search) {
                DocArr.push(ele)
            }
        })
        return DocArr
    }
    patientCheckIn(PatientDetails: any[]) {
        let now = new Date;
        let date = now.toDateString().split(' ');
        let availableDocs = this.findDoctorBySpl(PatientDetails[2], doctor)
        availableDocs.forEach(element => {
            if (element.BusyUntill < parseInt(date[2]){

            }
        });



    }
}