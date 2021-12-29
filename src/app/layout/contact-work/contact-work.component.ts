import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {MessageState} from '../../share/state/message/message.state';
import {NotifyService} from '../../share/services/notify/notify.service';

@Component({
  selector: 'app-contact-work',
  templateUrl: './contact-work.component.html',
  styleUrls: ['./contact-work.component.scss']
})
export class ContactWorkComponent implements OnInit {
  infoContact: any;

  constructor(private formBuilder: FormBuilder,
              private messageState: MessageState,
              private notifyService: NotifyService) { }

  ngOnInit(): void {
    this.listenFormInfoContact();
  }
  listenFormInfoContact(): void{
    this.infoContact = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      contactContent: new FormControl('', Validators.required)
    });
  }


  onSubmit(): void{
      const data = {
        name: this.infoContact.get('name').value,
        phone: this.infoContact.get('phone').value,
        contactContent: this.infoContact.get('contactContent').value,
        sendDate: new Date()
      };
      this.messageState.sendMesenger(data).subscribe(
        res => {
          console.log(res);
          this.listenFormInfoContact();
          this.notifyService.success('Gửi thông tin thành công');
        },
        error => {
          console.log(error);
          this.notifyService.error('Gửi thông tin thất bại vui lòng thử lại !');
        }
      );
  }
}
