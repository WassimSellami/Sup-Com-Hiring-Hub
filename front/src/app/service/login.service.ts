import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiServerUrl=environment.apiBaseUrl
  constructor(private http:HttpClient) { }


  public login (login:Login):Observable<Login>{
    return this.http.post<Login> (`${this.apiServerUrl}/api/auth/signin`,login);
  }




}
