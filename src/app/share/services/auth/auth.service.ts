import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {ApiService} from '../_core/api.service';
import {TokenStorageService} from './token-storage.service';
import {Account} from '../../model/account.model';

const apiUrl = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService,
              private tokenStorageService: TokenStorageService) { }
  login(username: string, password: string): Observable<any> {
    const loginData = {username, password};
    const url = `${apiUrl}/api/auth/login`;
    return this.apiService.post(url, loginData);
  }

  register(registerData: Account): Observable<any> {
    const url = `${apiUrl}/api/auth/register`;
    return this.apiService.post(url, registerData);
  }

  isLogiedIn(): void{
    return this.getJwtToken();
  }

  getJwtToken(): void{
    return this.tokenStorageService.getToken();
  }
}
