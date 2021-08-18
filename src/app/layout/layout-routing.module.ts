import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './layout.component';
import {HomeComponent} from './home/home.component';
import {TalkToMeComponent} from './talk-to-me/talk-to-me.component';
import {ScoreComponent} from './score/score.component';
import {SoundcloudComponent} from './soundcloud/soundcloud.component';
import {LoginComponent} from './login/login.component';

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
        path: 'talk-to-me',
        component: TalkToMeComponent
      },
      {
        path: 'score',
        component: ScoreComponent
      },
      {
        path: 'soundclound',
        component: SoundcloudComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
