import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Login } from '../service/login';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService , private router:Router) {}
  login_instance:Login = new Login();

  ngOnInit(): void {
  }
  login(){
    this.loginService.login(this.login_instance).subscribe( data =>{
      console.log(data);
       this.goToHome();
      
    },
    error => console.log(error));
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

}
