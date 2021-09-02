import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {AsideComponent} from './aside/aside.component';
import {RouterModule} from '@angular/router';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    AsideComponent,
    NavbarAdminComponent,
    SidebarAdminComponent
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    AsideComponent,
    NavbarAdminComponent,
    SidebarAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CollapseModule
  ]
})
export class ShareUiModule { }
