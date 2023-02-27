import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OffresComponent } from './offres/offres.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OffreDetailsComponent } from './offre-details/offre-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CompaniesComponent } from './companies/companies.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AddofferComponent } from './addoffer/addoffer.component';
import { UpdateofferComponent } from './updateoffer/updateoffer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    LoginComponent,
    NavbarComponent,
    OffresComponent,
    ContactUsComponent,
    HomeComponent,
    AboutComponent,
    OffreDetailsComponent,
    CompaniesComponent,
    FooterComponent,
    AddofferComponent,
    UpdateofferComponent,
    SignupComponent
  
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,


   
  ],
  providers: [OffresComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
