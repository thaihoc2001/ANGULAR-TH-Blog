import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {ShareUiModule} from '../share/ui/share-ui.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareUiModule,
    CollapseModule.forRoot(),
  ]
})
export class AdminModule { }
