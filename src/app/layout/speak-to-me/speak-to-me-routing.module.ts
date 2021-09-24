import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SpeakToMeComponent} from './speak-to-me.component';
import {PrivateConfideComponent} from './private-confide/private-confide.component';
const routes: Routes = [
  {
    path: '',
    component: SpeakToMeComponent,
    children: [
      {
        path: '',
        redirectTo: 'public-confide',
        pathMatch: 'full'
      },
      {
        path: 'private-confide',
        component: PrivateConfideComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakToMeRoutingModule { }
