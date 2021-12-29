import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { WorkComponent } from './home/component/work/work.component';
import { ContactComponent } from './home/component/contact/contact.component';
import { TalkToMeComponent } from './home/component/talk-to-me/talk-to-me.component';
import { WhoAmIComponent } from './home/component/who-am-i/who-am-i.component';
import { SoundcloudComponent } from './soundcloud/soundcloud.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {ShareUiModule} from '../share/ui/share-ui.module';
import {LayoutComponent} from './layout.component';
import { PostsComponent } from './posts/posts.component';
import { ContactWorkComponent } from './contact-work/contact-work.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import {MessageState} from '../share/state/message/message.state';



@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    WorkComponent,
    ContactComponent,
    TalkToMeComponent,
    WhoAmIComponent,
    SoundcloudComponent,
    PostsComponent,
    ContactWorkComponent,
    CurriculumVitaeComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgxPageScrollModule,
    ReactiveFormsModule,
    RouterModule,
    ShareUiModule
  ],
  providers: [
    MessageState
  ]
})
export class LayoutModule { }
