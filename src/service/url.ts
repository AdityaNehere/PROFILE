import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Url {

  userLogin: any = 'https://dev-api.wanasti.com/api/v1/user/login?lang=en&currencyCode=KW';
  token: any =
    'dAwMpo/TAWLhFrwwr3Wzcmc8XTdmAgp6zmGLsFmJ9HAnEbTQAg937i/hqKFjtFVQ4TnQ2y6xlVSeTKy3VWcxvalwvmPq6qF7+UcLd3wBXYoVQ2Puj49mTweKh/v2Rvj9zyVjfbexFkjMNZ5XyGucmdOI6XMmI98Zvu38Jh1fOo8157YxlgCozKkonixczjGIn3RKLuv7v3gXDRl4irzRcS6lYKGJB8vfA847GUppsVjdZV9bAjADfqUP2Iyl6Nz8MOWrSHNy8tWqhM6mI165rCwH3xMv7HEexmsMO7Mi36c=s.';

  constructor(private http: HttpClient) { }

  post(uri: string, inputData: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'auth': this.token
    });

    return this.http.post(uri, inputData, { headers }).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: any) {
    console.error('API Error:', error);
    return throwError(() => error);
  }

}
