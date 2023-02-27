import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Offer } from './offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  private currentOffer :Offer ;
  private apiServerUrl=environment.apiBaseUrl
  constructor(private http:HttpClient) {
   }
   public getOffers():Observable <Offer[]>{
    return this.http.get<Offer[]> (`${this.apiServerUrl}/offer/all`);
  }
  public addOffer(offer:Offer):Observable<Offer>{
    return this.http.post<Offer> (`${this.apiServerUrl}/offer/add`,offer);
  }
  public updateOffer (id:number , offer:Offer):Observable <Offer>{
    return this.http.put<Offer> (`${this.apiServerUrl}/offer/update/${id}`,offer);
  }
  public deleteOffer(id:number):Observable <Object> {
    return this.http.delete<Object>(`${this.apiServerUrl}/offer/delete/${id}`);
  } 
  getOfferById(id: number): Observable<Offer>{
    return this.http.get<Offer>(`${this.apiServerUrl}/offer/find/${id}`);
  }
  public  getCurrentOffer() :Offer{
    console.log("service : ", this.currentOffer)
    return this.currentOffer;
  }
  public  setCurrentOffer(selectedOffer:Offer) :void{
     this.currentOffer=selectedOffer;
  }
}
