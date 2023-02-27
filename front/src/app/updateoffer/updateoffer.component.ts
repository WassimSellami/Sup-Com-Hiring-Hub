import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Offer } from '../service/offer';
import { OfferService } from '../service/offer.service';

@Component({
  selector: 'app-updateoffer',
  templateUrl: './updateoffer.component.html',
  styleUrls: ['./updateoffer.component.css']
})
export class UpdateofferComponent implements OnInit {
 editOffer : Offer = new Offer();
 id:number;
  constructor(private offerService :OfferService , private route:ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.offerService.getOfferById(this.id).subscribe(data => {
      this.editOffer = data;
    }, error => console.log(error));
  }
  updateOffer(){
    this.offerService.updateOffer(this.id, this.editOffer).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/offres']);
  }


}
