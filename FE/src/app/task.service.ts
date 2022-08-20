import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { AddOrganisationDialog } from './components/organisation/organisation.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  createOrganisation(passedvalues:Object) {
    return this.webReqService.post('organisation', JSON.stringify({passedvalues}))
  }
}
