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


//   public signup (signup:Signup):Observable<Signup>{
//     return this.http.post<Signup> (`${this.apiServerUrl}/api/auth/signup`,signup)

// }
public signup (signup:Signup){
 this.http.post(
  `${this.apiServerUrl}/api/auth/signup`,
   {observe: 'response'}
)
// .map(response: Response) => {
//   this.responseStatus = response.status;
//   return this.extractData(response);
// }
// .catch(this.handleError);
}
}
