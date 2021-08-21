import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SpeakToMeComponent} from './speak-to-me.component';
const routes: Routes = [
  {
    path: '',
    component: SpeakToMeComponent,
    children: [
      {
        path: '',
        redirectTo: 'life',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakToMeRoutingModule { }
