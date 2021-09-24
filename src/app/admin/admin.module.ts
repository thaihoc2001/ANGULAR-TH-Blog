import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import {ShareUiModule} from '../share/ui/share-ui.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MessengerComponent } from './messenger/messenger.component';
import {MessageState} from '../share/state/message/message.state';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    MessengerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareUiModule,
    CollapseModule.forRoot(),
  ],
  providers: [
    MessageState
  ]
})
export class AdminModule { }
