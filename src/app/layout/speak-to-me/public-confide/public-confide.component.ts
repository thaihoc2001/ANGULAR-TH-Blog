import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ConfideService} from '../../../share/services/confide/confide.service';
import {Confide} from '../../../share/model/confide.model';

@Component({
  selector: 'app-public-confide',
  templateUrl: './public-confide.component.html',
  styleUrls: ['./public-confide.component.scss']
})
export class PublicConfideComponent implements OnInit {
  infoFormPublicCofide: any;
  listConfide: any = [];

  constructor(private confideService: ConfideService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.getConfidePublic();
  }
  initForm(): void{
    this.infoFormPublicCofide = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }
  getConfidePublic(): void{
    this.confideService.getConfidePublic().subscribe(
      res => {
        this.listConfide = res;
      },
      error => {
        console.log(error);
      }
    );
  }
  // tslint:disable-next-line:typedef
  get f() {
    return this.infoFormPublicCofide.controls;
  }
  onSubmit(): void{
    const data = {
      name: this.f.name.value,
      message: this.f.message.value,
      type: 'public',
    };
    this.confideService.postConfiden(data).subscribe(
      res => {
       console.log(res);
      },
      error => {
        console.log(error);
      }
    );
    window.location.reload();
  }
}
