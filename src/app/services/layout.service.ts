import { Injectable } from '@angular/core';
import { Observable, Subject, debounceTime, delay, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  protected layoutSize$ = new Subject();
  protected layoutSizeChange$ = this.layoutSize$.pipe(
    shareReplay({refCount: true}),
  );
 
  changeLayoutSize(){
    this.layoutSize$.next(null);
  }

  onChangeLayoutSize(): Observable<any> {
    return this.layoutSizeChange$.pipe(delay(1));
  }

  onSafeChangeLayoutSize(): Observable<any>{
    return this.layoutSizeChange$.pipe(
      debounceTime(350),
    )
  }
}
