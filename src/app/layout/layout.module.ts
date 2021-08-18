import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { WorkComponent } from './home/component/work/work.component';
import { ContactComponent } from './home/component/contact/contact.component';
import { TalkToMeComponent } from './home/component/talk-to-me/talk-to-me.component';
import { WhoAmIComponent } from './home/component/who-am-i/who-am-i.component';
import { ScoreComponent } from './score/score.component';
import { LoginComponent } from './login/login.component';
import { SoundcloudComponent } from './soundcloud/soundcloud.component';


@NgModule({
  declarations: [
    HomeComponent,
    WorkComponent,
    ContactComponent,
    TalkToMeComponent,
    WhoAmIComponent,
    ScoreComponent,
    LoginComponent,
    SoundcloudComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgxPageScrollModule
  ]
})
export class LayoutModule { }
