import { Component, OnInit } from '@angular/core';
import {MessageState} from '../../share/state/message/message.state';
import {Messenger} from '../../share/model/messenger.model';
import {Observable} from 'rxjs';
import {MessengerService} from '../../share/services/messenger/messenger.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent implements OnInit {
  messenger: Messenger[] = [];
  constructor(private messageState: MessageState) { }

  ngOnInit(): void {
    this.listenStateEvent();
  }
  listenStateEvent(): void {
    this.messageState.packageSelected$.subscribe(res => this.initMessenger());
  }

  private initMessenger(): void {
    const mes = this.messageState.getListMessenger();
    if (mes){
      this.messenger = mes;
      console.log(this.messenger);
    }
  }
}
