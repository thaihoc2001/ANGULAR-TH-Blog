import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import {Messenger} from '../../model/messenger.model';
import {MessengerService} from '../../services/messenger/messenger.service';
import {catchError, finalize, tap} from 'rxjs/operators';

@Injectable()
export class MessageState implements OnDestroy{
  private isReadySubject = new BehaviorSubject<boolean>(false);
  public isReady$ = this.isReadySubject.asObservable();

  // @ts-ignore
  private messengerSubject = new BehaviorSubject<Messenger[]>(null);
  public packageSelected$ = this.messengerSubject.asObservable();

  subscription: Subscription = new Subscription();
  constructor(private messengerService: MessengerService) {
    this.loadMessenger();
  }
  loadMessenger(): void{
    this.setIsReady(false);
    const ms = this.messengerService.getListMessenger().pipe(
      tap(messenger => this.messengerSubject.next(messenger)),
      catchError(async (error) => null),
      finalize(() => this.setIsReady(true))
    ).subscribe();
    this.subscription.add(ms);
  }
  sendMesenger(messenger: Messenger): Observable<any>{
    return this.messengerService.postMessenger(messenger).pipe(
      finalize(() => this.setIsReady(true))
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  setIsReady(isReady: boolean): void{
    this.isReadySubject.next(isReady);
  }
  setPackageSelected(messenger: Messenger[]): void {
    return this.messengerSubject.next(messenger);
  }
  getListMessenger(): Messenger[] {
    // @ts-ignore
    return this.messengerSubject.getValue();
  }
}
