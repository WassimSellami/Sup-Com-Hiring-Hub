import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Login } from '../service/login';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  constructor(private loginService:LoginService , private router:Router) {}
  showError=false;
  login_instance:Login = new Login();
  public loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  ngOnInit(): void {
  }
  login(){
    this.loginService.login(this.login_instance).subscribe( data =>{
      console.log(data);
       this.goToHome();
      
    },
    error => this.showError=true);
    this.login_instance.username="";
    this.login_instance.password="";
  }

  goToHome(){
    this.router.navigate(['/home']);
  }



}


