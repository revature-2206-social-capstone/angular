import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import User from '../models/User';
import { LocalService } from './local.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl: string = `${environment.baseUrl}/auth`;
  currentUser: User;

  constructor(private http: HttpClient, private localStorage: LocalService) { }

  login(email: string, password: string): Observable<any> {
    const payload = {email:email, password:password};
    const res = this.http.post<any>(`${this.authUrl}/login`, payload, {headers: environment.headers, withCredentials: environment.withCredentials});
    res.subscribe((data) => {
      this.currentUser = data
      this.localStorage.saveData('user', JSON.stringify(data));
    })
    return res;
  }

  logout(): void{
    this.http.post(`${this.authUrl}/logout`, null).subscribe();
  }

  register(firstName: string, lastName: string, email: string, password: string, userName: string): Observable<any> {
    const payload = {firstName: firstName, lastName: lastName, email: email, password: password, userName: userName};
    return this.http.post<any>(`${this.authUrl}/register`, payload, {headers: environment.headers});
  }

}
