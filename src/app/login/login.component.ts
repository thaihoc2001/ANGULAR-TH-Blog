import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import {AuthService} from '../share/services/auth/auth.service';
import {TokenStorageService} from '../share/services/auth/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  infoLogin: any;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private tokenStorageService: TokenStorageService,
              private router: Router) { }

  ngOnInit(): void {
    this.initFormLogin();
  }
  initFormLogin(): void{
    this.infoLogin = this.formBuilder.group({
      username: new FormControl('thaihoc2001', Validators.required),
      password: new FormControl('123', Validators.required)
    });
  }
  get f() {
    return this.infoLogin.controls;
  }
  onSubmit(): void{
    console.log(this.f.username.value);
    console.log(this.f.username.value);
    this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        res => {
          this.tokenStorageService.saveToken(res.body.token);
          this.router.navigate(['admin']);
        },
        error => {
          console.log(error);
        }
      );
  }
}
