import { Injectable } from '@angular/core';
import {Messenger} from '../../model/messenger.model';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApiService} from '../_core/api.service';
import {environment} from '../../../../environments/environment';

const apiUrl = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor(private apiService: ApiService) { }
  postMessenger(data: Messenger): Observable<any>{
    const path = `${apiUrl}/messenger/send`;
    return this.apiService.post(path, data);
  }
  getMessenger(): Observable<Messenger>{
    const path = `${apiUrl}/messenger`;
    return this.apiService.get(path).pipe(
      map(res => res.body)
    );
  }
  getListMessenger(): Observable<Array<Messenger>>{
    const path = `${apiUrl}/messenger`;
    return this.apiService.get(path).pipe(
      map(res => res.body)
    );
  }
}
