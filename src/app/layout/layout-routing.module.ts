import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './layout.component';
import {HomeComponent} from './home/home.component';
import {ScoreComponent} from './score/score.component';
import {SoundcloudComponent} from './soundcloud/soundcloud.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'speak-to-me',
        loadChildren: () => import('./speak-to-me/speak-to-me.module').then(m => m.SpeakToMeModule)
      },
      {
        path: 'score',
        component: ScoreComponent
      },
      {
        path: 'soundclound',
        component: SoundcloudComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
