import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Url } from './url';

@Injectable({
  providedIn: 'root'
})
export class Http {
  
    constructor(private urlService: Url) {}

  login(payload: any): Observable<any> {
    return this.urlService.post(this.urlService.userLogin, payload);
  }
  
}
