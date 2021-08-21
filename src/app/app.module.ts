import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxCaptchaModule } from 'ngx-captcha';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxPageScrollCoreModule,
        NgxPageScrollModule,
        NgxCaptchaModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
