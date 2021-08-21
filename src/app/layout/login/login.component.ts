import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  infoFormLogin: any;
  siteKey = '6LdXfQwcAAAAAKnSjtm4zoS0yPD6-RbDPtYbD1dG';

  ngOnInit(): void {
    this.initFormLogin();
  }
  initFormLogin(): void{
    this.infoFormLogin = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      recaptcha: new FormControl('', Validators.required)
    });
  }
  onSubmit(): void{
    console.log(this.infoFormLogin.getRawValue());
  }
}
