import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { LoginComponent } from './components/login-component/login-component.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { routing } from "./app.routes";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CardspecificPageComponent } from './pages/cardspecific-page/cardspecific-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardPageComponent,
    LoginPageComponent,
    CardspecificPageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
