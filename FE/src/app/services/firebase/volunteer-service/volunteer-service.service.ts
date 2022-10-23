import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { PrivateData, VolunteerCSVModel, VolunteerModel } from 'src/app/models/Reports';

@Injectable({
  providedIn: 'root'
})
export class VolunteerServiceService {

  constructor(public fs: AngularFirestore) { }


  async GetVolunteers() {

    let privateData: VolunteerModel[] = [];
    let volunteers: VolunteerCSVModel[] = [];
    let orgID: string = '';
    let donationType: string = '';


    await this.fs.firestore.collectionGroup('VolunteerDonations')
      .get().then((resp) => {
        resp.docs.forEach((resp) => {

          orgID = resp.ref.parent.parent.id;
          console.log(resp)
          let privateData: VolunteerModel = resp.data() as VolunteerModel;
          let newReferral: VolunteerCSVModel = {
            orgName: orgID,
            volunteerName:privateData.volunteerName,
            volunteerComment:privateData.volunteerComment,
            volunteerOrgName:privateData.volunteerOrgName,
            volunteerAmount:parseInt(privateData.volunteerAmount),
            volunteerPhone:privateData.volunteerPhone,
            volunteerEmail:privateData.volunteerEmail,
            volunteerPostcode:parseInt(privateData.volunteerPostcode),
            volunteerDOB:privateData.volunteerDOB,
            volunteerHowHeard:privateData.volunteerHowHeard,
            howContribute:privateData.howContribute,
            volunteerHours:parseInt(privateData.volunteerHours),
            monday:privateData.Monday,
            tuesday:privateData.Tuesday,
            wednesday:privateData.Wednesday,
            thursday:privateData.Thursday,
            friday:privateData.Friday,
            saturday:privateData.Saturday,
            sunday:privateData.Sunday
          };
          volunteers.push(newReferral)
        })
      });
    return volunteers;
  }
}
