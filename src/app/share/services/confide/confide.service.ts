import { Injectable } from '@angular/core';
import {ApiService} from '../_core/api.service';
import {Confide} from '../../model/confide.model';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {map} from 'rxjs/operators';

const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ConfideService {

  constructor( private apiService: ApiService) { }
  postConfiden(data: Confide): Observable<any>{
    const path = `${apiUrl}/confide/send`;
    return this.apiService.post(path, data);
  }
  getConfidePublic(): Observable<Confide>{
    const path = `${apiUrl}/confide/public`;
    return this.apiService.get(path).pipe(
      map(res => res.body)
    );
  }
  getConfidePrivate(): Observable<Confide>{
    const path = `${apiUrl}/confide/private`;
    return this.apiService.get(path).pipe(
      map(res => res.body)
    );
  }
}
