import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from './layout.component';
import {HomeComponent} from './home/home.component';
import {SoundcloudComponent} from './soundcloud/soundcloud.component';
import {PostsComponent} from './posts/posts.component';
import {ContactComponent} from './home/component/contact/contact.component';
import {ContactWorkComponent} from './contact-work/contact-work.component';
import {CurriculumVitaeComponent} from './curriculum-vitae/curriculum-vitae.component';

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
        path: 'soundclound',
        component: SoundcloudComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'contact-work',
        component: ContactWorkComponent
      },
      {
        path: 'curriculum-vitae',
        component: CurriculumVitaeComponent
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
