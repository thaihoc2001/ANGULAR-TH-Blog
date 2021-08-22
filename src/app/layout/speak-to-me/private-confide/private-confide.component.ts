import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder} from '@angular/forms';
import {ConfideService} from '../../../share/services/confide/confide.service';

@Component({
  selector: 'app-private-confide',
  templateUrl: './private-confide.component.html',
  styleUrls: ['./private-confide.component.scss']
})
export class PrivateConfideComponent implements OnInit {
  infoFormPrivateCofide: any;

  constructor(private formBuilder: FormBuilder,
              private confideService: ConfideService) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void{
    this.infoFormPrivateCofide = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }
  // tslint:disable-next-line:typedef
  get f() {
    return this.infoFormPrivateCofide.controls;
  }
  onSubmit(): void{
    const data = {
      name: this.f.name.value,
      message: this.f.message.value,
      type: 'private',
    };
    this.confideService.postConfiden(data).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
  }

}
