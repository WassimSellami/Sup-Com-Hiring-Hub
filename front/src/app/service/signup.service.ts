import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Signup } from './signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiServerUrl=environment.apiBaseUrl
  constructor(private http:HttpClient) { }


  public signup (signup:Signup):Observable<Signup>{
    return this.http.post<Signup> (`${this.apiServerUrl}/api/auth/signup`,signup)
  }
}
