import { Component } from '@angular/core';
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
export class SignupComponent {
  constructor(private formBuilder: FormBuilder, private router:Router,private signupService:SignupService) { }

  submitted = false;
  signup_instance:Signup = new Signup();

  public signupForm = new FormGroup({
    username: new FormControl('', Validators.required),
    occupation: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  }, {
  //  validator: MustMatch('password', 'confirmPassword')
  });

    // convenience getter for easy access to form fields
    get f() { return this.signupForm.controls; }

    onSignup() {
        this.submitted = true;
        if (this.signupForm.invalid) {
            return;
        }
      this.signupService.signup(this.signup_instance).subscribe(data =>{
        console.log(data);
      }, error => console.log(error))
      
      this.goToLogin();

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signupForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.signupForm.reset();
    }
    goToLogin(){
    this.router.navigate(['/login']);
  }


  

}
