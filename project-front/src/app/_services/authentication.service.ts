import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject,  Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../_models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private url = "http://localhost:8000/api/login/"
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('username')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  private httpHeaders = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  login(username, password): Observable<User> {
    return this.http.post<User>(this.url, {username, password}, this.httpHeaders)
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

}
