import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offre-details',
  templateUrl: './offre-details.component.html',
  styleUrls: ['./offre-details.component.css']

})
export class OffreDetailsComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
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
