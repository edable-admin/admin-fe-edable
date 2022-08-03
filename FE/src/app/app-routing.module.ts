import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogPassingPageComponent } from './components/dialog-passing/dialog-passing-page/dialog-passing-page.component';
import { ChildComponent } from './components/parent/child/child.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  { path: 'dialog-passing-page', component: DialogPassingPageComponent },
  {
    path: 'parent', component: ParentComponent,
    children:[
      {
        path: 'child',
        component:ChildComponent
      }
    ]
  },
  { path:'**', redirectTo:'/dialog-passing-page', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
