import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddofferComponent } from './addoffer/addoffer.component';
import { CompaniesComponent } from './companies/companies.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OffreDetailsComponent } from './offre-details/offre-details.component';
import { OffresComponent } from './offres/offres.component';
import { Page1Component } from './page1/page1.component';
import { RegisterComponent } from './register/register.component';
import { UpdateofferComponent } from './updateoffer/updateoffer.component';

const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'offres', component: OffresComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'details', component: OffreDetailsComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'addoffer', component:AddofferComponent  },
  { path: 'updateoffer/:id', component:UpdateofferComponent },

  { path: '**', component: HomeComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
