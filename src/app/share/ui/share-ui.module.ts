import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {AsideComponent} from './aside/aside.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AsideComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ShareUiModule { }
