import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { GeneralDonations } from 'src/app/models/GeneralDonations/GeneralDonations';
import { Organisation } from 'src/app/models/Organisation/Organisation';
import { Response } from 'src/app/models/Response';
import { Item } from 'src/app/models/Item';
import { ImageService } from '../image-service/image.service';

@Injectable({
  providedIn: 'root',
})
export class OrganisationService {
  constructor(
    public storage: AngularFireStorage,
    public fs: AngularFirestore,
    public imgService: ImageService
  ) {}

  async removeOrganisation(orgID: string) {
    //gets the organisation
    const org = this.fs.collection('Organisations').doc(orgID);

    //gets the reference
    const orgRef = org.ref;

    const generalDonationsSummary = org
      .collection('GeneralDonations')
      .doc('Summary');

    //gets the general donation limited to 1
    const generalDonationsColl = generalDonationsSummary.collection(
      'Donations',
      (query) => query.limit(1)
    );

    const generalDonationsRef = generalDonationsColl.ref;

    //gets the item limited to 1
    const itemsRef = org.collection('Items', (query) => query.limit(1)).ref;

    let orgName: String;

    //gets org data and assigns it to orgName
    await orgRef.get().then((org) => (orgName = org.data()['name']));

    const generalDonationsQuery = generalDonationsRef.get();
    const generalDonations: GeneralDonations[] = (
      await generalDonationsQuery
    ).docs.map((x) => x.data() as GeneralDonations);

    let response: Response;

    //if there is a general donation in an organisation
    if (generalDonations.length > 0) {
      response = {
        message: `${orgName} cannot be deleted as it has general donations`,
      };
      return response;
    }

    const itemsQuery = itemsRef.get();
    const items = (await itemsQuery).docs.map((x) => x.data() as Item);

    // if there is an item in the organisation return message
    if (items.length > 0) {
      response = {
        message: `${orgName} cannot be deleted as it has donation items`,
      };
      return response;
    }

    //If organisation does not have items or donations delete organisations
    generalDonationsSummary.delete();
    org.delete();

    this.storage
      .ref(`Organisations/${orgID}/orgLogo`)
      .delete()
      .subscribe({
        error: (err) => console.log(err),
      });

    response = { message: `${orgName} Successfully Deleted` };

    return response;
  }

  // Get orgs based on filter selected (acitve/inavtive/both)
  getOrgs(filter: string) {
    switch (filter) {
      case 'All':
        let AllOrg = this.fs
          .collection('Organisations')
          .valueChanges({ idField: 'id' });
        return AllOrg;

      case 'Active':
        let ActiveOrg = this.fs
          .collection('Organisations', (query) =>
            query.where('activeStatus', '==', true)
          )
          .valueChanges({ idField: 'id' });
        return ActiveOrg;

      case 'Inactive':
        let InacviveOrg = this.fs
          .collection('Organisations', (query) =>
            query.where('activeStatus', '==', false)
          )
          .valueChanges({ idField: 'id' });
        return InacviveOrg;

      default:
        return null;
    }
  }

  async addOrganisation(orgData: Organisation) {
    const orgReq: Organisation = {
      name: orgData.name ? orgData.name : null,
      summary: orgData.summary ? orgData.summary : null,
      description: orgData.description ? orgData.description : null,
      activeStatus: orgData.activeStatus,
      ABN: orgData.ABN ? orgData.ABN : null,
      phone: orgData.phone ? orgData.phone : null,
      website: orgData.website ? orgData.website : null,
      img: orgData.img ? orgData.img : null,
      totalDonationItems: 0,
      totalDonations: 0,
    };

    let generalDonationReq = {
      totalGeneralDonations: 0,
      numberOfDonations: 0,
    };

    let orgRef = this.fs.collection('Organisations').doc().ref;

    if (orgData?.file) {
      this.imgService.uploadImage(orgRef.id, orgData.file);
    }

    let generalDonationsRef = orgRef
      .collection('GeneralDonations')
      .doc('Summary');

    let batch = this.fs.firestore.batch();

    //adds the org
    batch.set(orgRef, orgReq, { merge: true });

    //adds the general donations subcollection
    batch.set(generalDonationsRef, generalDonationReq);

    //commits the batch
    batch.commit();

    //returns success message
    return { orgRef: orgRef.id, message: `${orgReq.name} Successfully Added` };
  }

  async editOrganisation(orgID: string, organisationReq: Organisation) {
    this.fs.collection('Organisations').doc(orgID).update(organisationReq);

    return organisationReq;
  }

  getOrgsGeneral(orgID: string) {
    let records = this.fs.collection('Organisations').doc(orgID).get();
    return records;
  }
  getALlORgs() {
    const orgGenDonations = this.fs.firestore
      .collectionGroup('Organisations')
      .get();

    return orgGenDonations;
  }
}
