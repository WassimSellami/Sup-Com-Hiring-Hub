import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Offer } from '../service/offer';
import { OfferService } from '../service/offer.service';

@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.component.html',
  styleUrls: ['./addoffer.component.css']
})
export class AddofferComponent implements OnInit {

  constructor(private offerService:OfferService , private router:Router) { }
 public offers:Offer[]
 offer:Offer = new Offer();
  ngOnInit(): void {
  }

  public getOffers(): void {
    this.offerService.getOffers().subscribe(
      (response: Offer[]) => {
        this.offers = response;
        console.log(this.offers);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  
  addOffer(){
    this.offerService.addOffer(this.offer).subscribe( data =>{
      console.log(this.offer);
      this.goToOffers();
    },
    error => console.log(error));
  }

  goToOffers(){
    this.router.navigate(['/offres']);
  }

}
