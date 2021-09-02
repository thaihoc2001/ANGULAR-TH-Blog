import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import {HttpClientModule} from '@angular/common/http';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollCoreModule,
    NgxPageScrollModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
