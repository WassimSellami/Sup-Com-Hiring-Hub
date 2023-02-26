import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Signup } from '../service/signup';
import { SignupService } from '../service/signup.service';

import { FormBuilder, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers/must_match_validator'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // constructor(private router:Router,private signupService:SignupService) { }
  // showError=false;
  // signup_instance:Signup = new Signup();
  // public signupForm = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  //   email: new FormControl(''),
  //   first_name: new FormControl(''),
  //   last_name: new FormControl(''),
  //   occupation: new FormControl(''),
  //   birth_date: new FormControl(''),
  // });
  // ngOnInit(): void {
  // }
  // signup(){
  //   console.log("sign up clicked");
  //   this.signupService.signup(this.signup_instance)
  //   // .subscribe( data =>{
  //   //    console.log(data);
  //   //    this.goToLogin();
      
  //   // },
  //   //  error => console.log(error))
  //   //this.showError=true);
  //   // this.signup_instance.username="";
  //   // this.signup_instance.password="";
  // }

  // goToLogin(){
  //   this.router.navigate(['/login']);
  // }
  registerForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            title: ['', Validators.required],
            firstName: ['test', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required],
            acceptTerms: [false, Validators.requiredTrue]
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }


  

}
