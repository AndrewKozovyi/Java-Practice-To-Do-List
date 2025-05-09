import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PopupService {
  private popupVisible = new BehaviorSubject<boolean>(false);
  popupVisible$ = this.popupVisible.asObservable();

  open() {
    this.popupVisible.next(true);
  }

  close() {
    this.popupVisible.next(false);
  }

  toggle() {
    this.popupVisible.next(!this.popupVisible.value);
  }
}
