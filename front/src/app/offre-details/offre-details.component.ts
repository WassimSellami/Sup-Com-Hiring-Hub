import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OffresComponent } from '../offres/offres.component';
import { Offer } from '../service/offer';
import { OfferService } from '../service/offer.service';
@Component({
  selector: 'app-offre-details',
  templateUrl: './offre-details.component.html',
  styleUrls: ['./offre-details.component.css']

})
export class OffreDetailsComponent implements OnInit {
  constructor(private http:HttpClient ,  private offresComponent:OffresComponent , private offerService:OfferService) { }
  myOffer:Offer;
  defaultImage: String = "https://medias.vie-publique.fr/data_storage_s3/styles/large_full/public/en_bref/image_principale/UE_feuille_de_route_intelligence_artificielle_IA_189424980_Drupal.jpg?itok=lSfId9LV" 
  ngOnInit(): void {
    this.myOffer=this.offerService.getCurrentOffer();
}
  name:String=""
  file:any;
  getName(name:String){
this.name=name
  }
  getFile(event:any){
this.file=event.target.files[0];
console.log("file",this.file)
  }
submitData(){
let formdata = new FormData();
  formdata.set("file",this.file)
 //Api
//  this.http.post('http://localhost:8080/.....',formdata).subscribe(
//   (response)=>{

//   }
//  )
}
}
