import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganisationComponent } from './components/organisation/organisation.component';
import { TransactionsComponent} from './components/transactions/transactions.component'
const routes: Routes = [
  { path: 'organisation', component: OrganisationComponent},
  { path: '', redirectTo: '/organisation', pathMatch: 'full' },
  
  { path: 'transaction', component: TransactionsComponent},
  { path: '', redirectTo: '/transaction', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
