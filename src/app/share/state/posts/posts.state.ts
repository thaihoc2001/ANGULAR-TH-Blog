import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class PostsState implements OnDestroy{
  ngOnDestroy(): void {
  }
}
