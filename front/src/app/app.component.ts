import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
  }
  title = 'front_new';
  showNav: boolean = false;
  showFoot: boolean = false;
  changeOfRoutes() {
    const url = this.router.url;
    this.showNav = !url.includes("page1") && !url.includes("login") && !url.includes("register") && !url.includes("popup")  && !url.includes("addoffer");
    this.showFoot = !url.includes("page1") && !url.includes("login") && !url.includes("register") && !url.includes("popup")  && !url.includes("addoffer");

  }
}
