import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { WorkComponent } from './home/component/work/work.component';
import { ContactComponent } from './home/component/contact/contact.component';
import { TalkToMeComponent } from './home/component/talk-to-me/talk-to-me.component';


@NgModule({
  declarations: [
    HomeComponent,
    WorkComponent,
    ContactComponent,
    TalkToMeComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgxPageScrollModule
  ]
})
export class LayoutModule { }
