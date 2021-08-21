import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeakToMeRoutingModule } from './speak-to-me-routing.module';
import { SpeakToMeComponent } from './speak-to-me.component';
import {ShareUiModule} from '../../share/ui/share-ui.module';


@NgModule({
  declarations: [
    SpeakToMeComponent,
  ],
  imports: [
    CommonModule,
    SpeakToMeRoutingModule,
    ShareUiModule
  ]
})
export class SpeakToMeModule { }
