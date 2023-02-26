import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from '../service/signup';
import { SignupService } from '../service/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router,private signupService:SignupService) { }
  showError=false;
  signup_instance:Signup = new Signup();
  public signupForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    occupation: new FormControl(''),
    birth_date: new FormControl(''),



  });
  ngOnInit(): void {
  }
  signup(){
    this.signupService.signup(this.signup_instance)
    // .subscribe( data =>{
    //    console.log(data);
    //    this.goToLogin();
      
    // },
    //  error => console.log(error))
    //this.showError=true);
    // this.signup_instance.username="";
    // this.signup_instance.password="";
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

}
